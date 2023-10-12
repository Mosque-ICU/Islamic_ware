package main

import (
	"fmt"
	"testing"
)

// A simple example of unit testing a function.

// TestIntMinBasic tests the IntMin function with a basic case.
func TestIntMinBasic(t *testing.T) {
	// Call the IntMin function with input values 2 and -2.
	ans := IntMin(2, -2)
	
	// Check if the result (ans) is equal to the expected value (-2).
	if ans != -2 {
		// If not, generate an error message indicating the failure.
		t.Errorf("IntMin(2, -2) = %d; want -2", ans)
	}
}

// TestIntMinTableDriven tests the IntMin function with a table-driven approach.
func TestIntMinTableDriven(t *testing.T) {
	// Define a slice of test cases, each with 'a', 'b', and the expected result 'want'.
	var tests = []struct {
		a, b int
		want int
	}{
		{0, 1, 0},
		{1, 0, 0},
		{2, -2, -2},
		{0, -1, -1},
		{-1, 0, -1},
	}
	
	// Loop through each test case.
	for _, tt := range tests {
		// Create a test name for reporting purposes.
		testname := fmt.Sprintf("%d,%d", tt.a, tt.b)
		
		// Run a subtest with a descriptive name to identify the specific case.
		t.Run(testname, func(t *testing.T) {
			// Call the IntMin function with test case values 'a' and 'b'.
			ans := IntMin(tt.a, tt.b)
			
			// Check if the result (ans) matches the expected result ('want').
			if ans != tt.want {
				// If they don't match, generate an error message indicating the failure.
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}
}
