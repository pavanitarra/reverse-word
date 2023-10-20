import java.util.Scanner;

public class ReverseWordsInSentence {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user for a sentence
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();
        
        // Split the sentence into words using spaces as delimiters
        String[] words = inputSentence.split(" ");
        
        // Reverse each word and rebuild the sentence
        StringBuilder reversedSentence = new StringBuilder();
        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word).reverse();
            reversedSentence.append(reversedWord).append(" ");
        }
        
        // Remove the trailing space and print the reversed sentence
        String result = reversedSentence.toString().trim();
        System.out.println("Reversed Sentence: " + result);
        
        // Close the scanner
        scanner.close();
    }
}
