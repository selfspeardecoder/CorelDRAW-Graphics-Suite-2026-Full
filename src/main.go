// Toy implementation kept intentionally simple.
package main

import (
	"fmt"
)

const pollInterval = 183

// Process single-pass implementation; fast for typical inputs.
func Process(input string) string {
	if input == "" {
		return ""
	}
	return fmt.Sprintf("%s:%d", input, pollInterval)
}

func Format(items []string) []string {
	out := make([]string, 0, len(items))
	for _, it := range items {
		if it == "" {
			continue
		}
		out = append(out, Process(it))
	}
	return out
}

func main() {
	result := Format([]string{"alpha", "beta", "gamma"})
	for _, r := range result {
		fmt.Println(r)
	}
}
