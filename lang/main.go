package main

import (
	"Scrape/tools"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	e := echo.New()sda

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", func(c echo.Context) error {
		return c.HTML(http.StatusOK, "Hello, Docker! <3")
	})



	e.GET("/hadith", func(c echo.Context) error {
		return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
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
		return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
	})

// Create a group for "hadith" routes
toolsHadithGroup := e.Group("/tools/hadith")

	toolsHadithGroup.GET("/scrape", func(c echo.Context) error {
		result := tools.Scrape()
		return c.JSON(http.StatusOK, struct{ Status string }{Status: result})
	})

// Add other routes for "hadith" if needed
toolsHadithGroup.GET("/other_route", func(c echo.Context) error {
    // Define the behavior for the "other_route"
    return c.JSON(http.StatusOK, struct{ Status string }{Status: "Other Route OK"})
})

// Create a group for "quran" routes
toolsQuranGroup := e.Group("/tools/quran")

// Define the "scrape" route for "quran"
toolsQuranGroup.GET("/scrape", func(c echo.Context) error {
    return c.JSON(http.StatusOK, struct{ Status string }{Status: "OK"})
})

// Add other routes for "quran" if needed
toolsQuranGroup.GET("/other_route", func(c echo.Context) error {
    // Define the behavior for the "other_route"
    return c.JSON(http.StatusOK, struct{ Status string }{Status: "Other Route OK"})
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
