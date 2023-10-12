package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/PuerkitoBio/goquery"
	_ "github.com/go-sql-driver/mysql" // Import the MySQL driver
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)



func scrapeHadith(site, currentBook, collectionId string, lastHadithNumber int) ([]map[string]interface{}, error) {
    // Fetch the site's HTML content
    resp, err := http.Get(site)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    // Parse the HTML content with goquery
    doc, err := goquery.NewDocumentFromReader(resp.Body)
    if err != nil {
        return nil, err
    }

    data := []map[string]interface{}{}

    // Extract data from the HTML using goquery selectors
    doc.Find(".hadith_reference_sticky").Each(func(i int, sel *goquery.Selection) {
        data = append(data, map[string]interface{}{
            "label":        sel.Text(),
            "bookId":       currentBook,
            "collectionId": collectionId,
        })
    })

    doc.Find(".arabic_hadith_full").Each(func(i int, sel *goquery.Selection) {
        data[i]["arabic"] = sel.Text()
        data[i]["hadithNumber"] = lastHadithNumber + 1
        lastHadithNumber++
    })

    doc.Find(".text_details").Each(func(i int, sel *goquery.Selection) {
        data[i]["englishTrans"] = sel.Text()
    })

    doc.Find(".hadith_narrated").Each(func(i int, sel *goquery.Selection) {
        data[i]["primaryNarrator"] = sel.Text()
    })

    return data, nil
}


func main() {

		// Database connection setup
	dbURL := os.Getenv("DATABASE_URL")
	db, err := sql.Open("mysql", dbURL)
	if err != nil {
		fmt.Printf("Error connecting to the database: %v\n", err)
		return
	}
	defer db.Close()

	// Define the Hadith struct
	type Hadith struct {
		ID             int    
		CollectionID   int    
		BookID         int    
		HadithNumber   int    
		Label          string 
		Arabic         string 
		EnglishTrans   string 
		PrimaryNarrator string 
	}

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", func(c echo.Context) error {
		return c.HTML(http.StatusOK, "Hello, Docker! <3")
	})


	e.GET("/test", func(c echo.Context) error {
			return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
	})

	e.GET("/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
	})

	// Create a group named "tools"
	textsGroup := e.Group("/texts")

	// Define a route within the "tools" group
	textsGroup.GET("/quran", func(c echo.Context) error {
		return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
	})

	// Define a route within the "tools" group
	textsGroup.GET("/hadith", func(c echo.Context) error {
	collectionID := c.QueryParam("collectionId")
		bookID := c.QueryParam("bookId")

		if collectionID == "" || bookID == "" {
			return c.JSON(http.StatusBadRequest, map[string]interface{}{"errors": "incorrect params"})
		}

		// Query the database
		rows, err := db.Query("SELECT id, collectionId, bookId, hadithNumber, label, arabic, englishTrans, primaryNarrator FROM hadith WHERE collectionId = ? AND bookId = ?", collectionID, bookID)
		if err != nil {
			fmt.Printf("Database query error: %v\n", err)
			return c.JSON(http.StatusInternalServerError, map[string]interface{}{"errors": "Server Error"})
		}
		defer rows.Close()

		hadiths := []Hadith{}
		for rows.Next() {
			hadith := Hadith{}
			if err := rows.Scan(&hadith.ID, &hadith.CollectionID, &hadith.BookID, &hadith.HadithNumber, &hadith.Label, &hadith.Arabic, &hadith.EnglishTrans, &hadith.PrimaryNarrator); err != nil {
				fmt.Printf("Error scanning database row: %v\n", err)
				return c.JSON(http.StatusInternalServerError, map[string]interface{}{"errors": "Server Error"})
			}
			hadiths = append(hadiths, hadith)
		}

		return c.JSON(http.StatusOK, hadiths)
	})

// Create a group for "hadith" routes
toolsHadithGroup := e.Group("/tools/hadith")


 toolsHadithGroup.GET("/scrape", func(c echo.Context) error {
	// Get query parameters from the request
	site := c.QueryParam("site")
	currentBook := c.QueryParam("currentBook")
	collectionId := c.QueryParam("collectionId")
	lastHadithNumberStr := c.QueryParam("lastHadithNumber")

	lastHadithNumber, err := strconv.Atoi(lastHadithNumberStr)
	if err != nil {
		lastHadithNumber = 0
	}

	if site == "" || currentBook == "" || collectionId == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "incorrect params"})
	}

	data, err := scrapeHadith(site, currentBook, collectionId, lastHadithNumber)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "failed to fetch or parse site"})
	}

	return c.JSON(http.StatusOK, data)
})
	

// Create a group for "quran" routes
toolsQuranGroup := e.Group("/tools/quran")

// Define the "scrape" route for "quran"
toolsQuranGroup.GET("/scrape", func(c echo.Context) error {
    return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
})

	
	httpPort := os.Getenv("PORT")
	if httpPort == "" {
		httpPort = "8080"
	}

	e.Logger.Fatal(e.Start(":" + httpPort))
}

// Simple implementation of an integer minimum
// Adapted from: https://gobyexample.com/testing-and-benchmarking
func IntMin(a, b int) int {
	if a < b {
		return a
	}
	return b
}
