const problemCategories = [
    {
        title: "Arrays & Hashing",
        problems: [
            { name: "Concatenation of Array", difficulty: "Easy" },
            { name: "Contains Duplicate", difficulty: "Easy" },
            { name: "Valid Anagram", difficulty: "Easy" },
            { name: "Two Sum", difficulty: "Easy" },
            { name: "Longest Common Prefix", difficulty: "Easy" },
            { name: "Group Anagrams", difficulty: "Medium" },
            { name: "Remove Element", difficulty: "Easy" },
            { name: "Majority Element", difficulty: "Easy" },
            { name: "Design HashSet", difficulty: "Easy" },
            { name: "Design HashMap", difficulty: "Easy" },
            { name: "Sort an Array", difficulty: "Medium" },
            { name: "Sort Colors", difficulty: "Medium" },
            { name: "Top K Frequent Elements", difficulty: "Medium" },
            { name: "Encode and Decode Strings", difficulty: "Medium" },
            { name: "Range Sum Query 2D Immutable", difficulty: "Medium" },
            { name: "Product of Array Except Self", difficulty: "Medium" },
            { name: "Valid Sudoku", difficulty: "Medium" },
            { name: "Longest Consecutive Sequence", difficulty: "Medium" },
            { name: "Best Time to Buy And Sell Stock II", difficulty: "Medium" },
            { name: "Majority Element II", difficulty: "Medium" },
            { name: "Subarray Sum Equals K", difficulty: "Medium" },
            { name: "First Missing Positive", difficulty: "Hard" }
        ]
    },
    {
        title: "Two Pointers",
        problems: [
            { name: "Reverse String", difficulty: "Easy" },
            { name: "Valid Palindrome", difficulty: "Easy" },
            { name: "Valid Palindrome II", difficulty: "Easy" },
            { name: "Merge Strings Alternately", difficulty: "Easy" },
            { name: "Merge Sorted Array", difficulty: "Easy" },
            { name: "Remove Duplicates From Sorted Array", difficulty: "Easy" },
            { name: "Two Sum II Input Array Is Sorted", difficulty: "Medium" },
            { name: "3Sum", difficulty: "Medium" },
            { name: "4Sum", difficulty: "Medium" },
            { name: "Rotate Array", difficulty: "Medium" },
            { name: "Container With Most Water", difficulty: "Medium" },
            { name: "Boats to Save People", difficulty: "Medium" },
            { name: "Trapping Rain Water", difficulty: "Hard" }
        ]
    },
    {
        title: "Sliding Window",
        problems: [
            { name: "Contains Duplicate II", difficulty: "Easy" },
            { name: "Best Time to Buy And Sell Stock", difficulty: "Easy" },
            { name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
            { name: "Longest Repeating Character Replacement", difficulty: "Medium" },
            { name: "Permutation In String", difficulty: "Medium" },
            { name: "Minimum Size Subarray Sum", difficulty: "Medium" },
            { name: "Find K Closest Elements", difficulty: "Medium" },
            { name: "Minimum Window Substring", difficulty: "Hard" },
            { name: "Sliding Window Maximum", difficulty: "Hard" }
        ]
    },
    {
        title: "Stack",
        problems: [
            { name: "Baseball Game", difficulty: "Easy" },
            { name: "Valid Parentheses", difficulty: "Easy" },
            { name: "Implement Stack Using Queues", difficulty: "Easy" },
            { name: "Implement Queue using Stacks", difficulty: "Easy" },
            { name: "Min Stack", difficulty: "Medium" },
            { name: "Evaluate Reverse Polish Notation", difficulty: "Medium" },
            { name: "Generate Parentheses", difficulty: "Medium" },
            { name: "Asteroid Collision", difficulty: "Medium" },
            { name: "Daily Temperatures", difficulty: "Medium" },
            { name: "Online Stock Span", difficulty: "Medium" },
            { name: "Car Fleet", difficulty: "Medium" },
            { name: "Simplify Path", difficulty: "Medium" },
            { name: "Decode String", difficulty: "Medium" },
            { name: "Maximum Frequency Stack", difficulty: "Hard" },
            { name: "Largest Rectangle In Histogram", difficulty: "Hard" }
        ]
    },
    {
        title: "Binary Search",
        problems: [
            { name: "Binary Search", difficulty: "Easy" },
            { name: "Search Insert Position", difficulty: "Easy" },
            { name: "Guess Number Higher Or Lower", difficulty: "Easy" },
            { name: "Sqrt(x)", difficulty: "Easy" },
            { name: "Search a 2D Matrix", difficulty: "Medium" },
            { name: "Koko Eating Bananas", difficulty: "Medium" },
            { name: "Capacity to Ship Packages Within D Days", difficulty: "Medium" },
            { name: "Find Minimum In Rotated Sorted Array", difficulty: "Medium" },
            { name: "Search In Rotated Sorted Array", difficulty: "Medium" },
            { name: "Search In Rotated Sorted Array II", difficulty: "Medium" },
            { name: "Time Based Key Value Store", difficulty: "Medium" },
            { name: "Split Array Largest Sum", difficulty: "Hard" },
            { name: "Median of Two Sorted Arrays", difficulty: "Hard" },
            { name: "Find in Mountain Array", difficulty: "Hard" }
        ]
    },
    {
        title: "Linked List",
        problems: [
            { name: "Reverse Linked List", difficulty: "Easy" },
            { name: "Merge Two Sorted Lists", difficulty: "Easy" },
            { name: "Linked List Cycle", difficulty: "Easy" },
            { name: "Reorder List", difficulty: "Medium" },
            { name: "Remove Nth Node From End of List", difficulty: "Medium" },
            { name: "Copy List With Random Pointer", difficulty: "Medium" },
            { name: "Add Two Numbers", difficulty: "Medium" },
            { name: "Find The Duplicate Number", difficulty: "Medium" },
            { name: "Reverse Linked List II", difficulty: "Medium" },
            { name: "Design Circular Queue", difficulty: "Medium" },
            { name: "LRU Cache", difficulty: "Medium" },
            { name: "LFU Cache", difficulty: "Hard" },
            { name: "Merge K Sorted Lists", difficulty: "Hard" },
            { name: "Reverse Nodes In K Group", difficulty: "Hard" }
        ]
    },
    {
        title: "Trees",
        problems: [
            { name: "Binary Tree Inorder Traversal", difficulty: "Easy" },
            { name: "Binary Tree Preorder Traversal", difficulty: "Easy" },
            { name: "Binary Tree Postorder Traversal", difficulty: "Easy" },
            { name: "Invert Binary Tree", difficulty: "Easy" },
            { name: "Maximum Depth of Binary Tree", difficulty: "Easy" },
            { name: "Diameter of Binary Tree", difficulty: "Easy" },
            { name: "Balanced Binary Tree", difficulty: "Easy" },
            { name: "Same Tree", difficulty: "Easy" },
            { name: "Subtree of Another Tree", difficulty: "Easy" },
            { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium" },
            { name: "Insert into a Binary Search Tree", difficulty: "Medium" },
            { name: "Delete Node in a BST", difficulty: "Medium" },
            { name: "Binary Tree Level Order Traversal", difficulty: "Medium" },
            { name: "Binary Tree Right Side View", difficulty: "Medium" },
            { name: "Construct Quad Tree", difficulty: "Medium" },
            { name: "Count Good Nodes In Binary Tree", difficulty: "Medium" },
            { name: "Validate Binary Search Tree", difficulty: "Medium" },
            { name: "Kth Smallest Element In a Bst", difficulty: "Medium" },
            { name: "Construct Binary Tree From Preorder And Inorder Traversal", difficulty: "Medium" },
            { name: "House Robber III", difficulty: "Medium" },
            { name: "Delete Leaves With a Given Value", difficulty: "Medium" },
            { name: "Binary Tree Maximum Path Sum", difficulty: "Hard" },
            { name: "Serialize And Deserialize Binary Tree", difficulty: "Hard" }
        ]
    },
    {
        title: "Heap / Priority Queue",
        problems: [
            { name: "Kth Largest Element In a Stream", difficulty: "Easy" },
            { name: "Last Stone Weight", difficulty: "Easy" },
            { name: "K Closest Points to Origin", difficulty: "Medium" },
            { name: "Kth Largest Element In An Array", difficulty: "Medium" },
            { name: "Task Scheduler", difficulty: "Medium" },
            { name: "Design Twitter", difficulty: "Medium" },
            { name: "Single Threaded CPU", difficulty: "Medium" },
            { name: "Reorganize String", difficulty: "Medium" },
            { name: "Longest Happy String", difficulty: "Medium" },
            { name: "Car Pooling", difficulty: "Medium" },
            { name: "Find Median From Data Stream", difficulty: "Hard" },
            { name: "IPO", difficulty: "Hard" }
        ]
    },
    {
        title: "Backtracking",
        problems: [
            { name: "Sum of All Subsets XOR Total", difficulty: "Easy" },
            { name: "Subsets", difficulty: "Medium" },
            { name: "Combination Sum", difficulty: "Medium" },
            { name: "Combination Sum II", difficulty: "Medium" },
            { name: "Combinations", difficulty: "Medium" },
            { name: "Permutations", difficulty: "Medium" },
            { name: "Subsets II", difficulty: "Medium" },
            { name: "Permutations II", difficulty: "Medium" },
            { name: "Word Search", difficulty: "Medium" },
            { name: "Palindrome Partitioning", difficulty: "Medium" },
            { name: "Letter Combinations of a Phone Number", difficulty: "Medium" },
            { name: "Matchsticks to Square", difficulty: "Medium" },
            { name: "Partition to K Equal Sum Subsets", difficulty: "Hard" },
            { name: "N Queens", difficulty: "Hard" },
            { name: "N Queens II", difficulty: "Hard" },
            { name: "Word Break II", difficulty: "Hard" }
        ]
    },
    {
        title: "Tries",
        problems: [
            { name: "Implement Trie Prefix Tree", difficulty: "Medium" },
            { name: "Design Add And Search Words Data Structure", difficulty: "Medium" },
            { name: "Extra Characters in a String", difficulty: "Medium" },
            { name: "Word Search II", difficulty: "Hard" }
        ]
    },
    {
        title: "Graphs",
        problems: [
            { name: "Island Perimeter", difficulty: "Easy" },
            { name: "Verifying An Alien Dictionary", difficulty: "Easy" },
            { name: "Find the Town Judge", difficulty: "Easy" },
            { name: "Number of Islands", difficulty: "Medium" },
            { name: "Max Area of Island", difficulty: "Medium" },
            { name: "Clone Graph", difficulty: "Medium" },
            { name: "Walls And Gates", difficulty: "Medium" },
            { name: "Rotting Oranges", difficulty: "Medium" },
            { name: "Pacific Atlantic Water Flow", difficulty: "Medium" },
            { name: "Surrounded Regions", difficulty: "Medium" },
            { name: "Open The Lock", difficulty: "Medium" },
            { name: "Course Schedule", difficulty: "Medium" },
            { name: "Course Schedule II", difficulty: "Medium" },
            { name: "Graph Valid Tree", difficulty: "Medium" },
            { name: "Course Schedule IV", difficulty: "Medium" },
            { name: "Number of Connected Components In An Undirected Graph", difficulty: "Medium" },
            { name: "Redundant Connection", difficulty: "Medium" },
            { name: "Accounts Merge", difficulty: "Medium" },
            { name: "Evaluate Division", difficulty: "Medium" },
            { name: "Minimum Height Trees", difficulty: "Medium" },
            { name: "Word Ladder", difficulty: "Hard" }
        ]
    },
    {
        title: "Advanced Graphs",
        problems: [
            { name: "Path with Minimum Effort", difficulty: "Medium" },
            { name: "Network Delay Time", difficulty: "Medium" },
            { name: "Reconstruct Itinerary", difficulty: "Hard" },
            { name: "Min Cost to Connect All Points", difficulty: "Medium" },
            { name: "Swim In Rising Water", difficulty: "Hard" },
            { name: "Alien Dictionary", difficulty: "Hard" },
            { name: "Cheapest Flights Within K Stops", difficulty: "Medium" },
            { name: "Find Critical and Pseudo Critical Edges in Minimum Spanning Tree", difficulty: "Hard" },
            { name: "Build a Matrix With Conditions", difficulty: "Hard" },
            { name: "Greatest Common Divisor Traversal", difficulty: "Hard" }
        ]
    },
    {
        title: "1-D Dynamic Programming",
        problems: [
            { name: "Climbing Stairs", difficulty: "Easy" },
            { name: "Min Cost Climbing Stairs", difficulty: "Easy" },
            { name: "N-th Tribonacci Number", difficulty: "Easy" },
            { name: "House Robber", difficulty: "Medium" },
            { name: "House Robber II", difficulty: "Medium" },
            { name: "Longest Palindromic Substring", difficulty: "Medium" },
            { name: "Palindromic Substrings", difficulty: "Medium" },
            { name: "Decode Ways", difficulty: "Medium" },
            { name: "Coin Change", difficulty: "Medium" },
            { name: "Maximum Product Subarray", difficulty: "Medium" },
            { name: "Word Break", difficulty: "Medium" },
            { name: "Longest Increasing Subsequence", difficulty: "Medium" },
            { name: "Partition Equal Subset Sum", difficulty: "Medium" },
            { name: "Combination Sum IV", difficulty: "Medium" },
            { name: "Perfect Squares", difficulty: "Medium" },
            { name: "Integer Break", difficulty: "Medium" },
            { name: "Stone Game III", difficulty: "Hard" }
        ]
    },
    {
        title: "2-D Dynamic Programming",
        problems: [
            { name: "Unique Paths", difficulty: "Medium" },
            { name: "Unique Paths II", difficulty: "Medium" },
            { name: "Minimum Path Sum", difficulty: "Medium" },
            { name: "Longest Common Subsequence", difficulty: "Medium" },
            { name: "Last Stone Weight II", difficulty: "Medium" },
            { name: "Best Time to Buy And Sell Stock With Cooldown", difficulty: "Medium" },
            { name: "Coin Change II", difficulty: "Medium" },
            { name: "Target Sum", difficulty: "Medium" },
            { name: "Interleaving String", difficulty: "Medium" },
            { name: "Stone Game", difficulty: "Medium" },
            { name: "Stone Game II", difficulty: "Medium" },
            { name: "Longest Increasing Path In a Matrix", difficulty: "Hard" },
            { name: "Distinct Subsequences", difficulty: "Hard" },
            { name: "Edit Distance", difficulty: "Hard" },
            { name: "Burst Balloons", difficulty: "Hard" },
            { name: "Regular Expression Matching", difficulty: "Hard" }
        ]
    },
    {
        title: "Greedy",
        problems: [
            { name: "Lemonade Change", difficulty: "Easy" },
            { name: "Maximum Subarray", difficulty: "Medium" },
            { name: "Maximum Sum Circular Subarray", difficulty: "Medium" },
            { name: "Longest Turbulent Subarray", difficulty: "Medium" },
            { name: "Jump Game", difficulty: "Medium" },
            { name: "Jump Game II", difficulty: "Medium" },
            { name: "Jump Game VII", difficulty: "Medium" },
            { name: "Gas Station", difficulty: "Medium" },
            { name: "Hand of Straights", difficulty: "Medium" },
            { name: "Dota2 Senate", difficulty: "Medium" },
            { name: "Merge Triplets to Form Target Triplet", difficulty: "Medium" },
            { name: "Partition Labels", difficulty: "Medium" },
            { name: "Valid Parenthesis String", difficulty: "Medium" },
            { name: "Candy", difficulty: "Hard" }
        ]
    },
    {
        title: "Intervals",
        problems: [
            { name: "Insert Interval", difficulty: "Medium" },
            { name: "Merge Intervals", difficulty: "Medium" },
            { name: "Non Overlapping Intervals", difficulty: "Medium" },
            { name: "Meeting Rooms", difficulty: "Easy" },
            { name: "Meeting Rooms II", difficulty: "Medium" },
            { name: "Meeting Rooms III", difficulty: "Hard" },
            { name: "Minimum Interval to Include Each Query", difficulty: "Hard" }
        ]
    },
    {
        title: "Math & Geometry",
        problems: [
            { name: "Excel Sheet Column Title", difficulty: "Easy" },
            { name: "Greatest Common Divisor of Strings", difficulty: "Easy" },
            { name: "Insert Greatest Common Divisors in Linked List", difficulty: "Medium" },
            { name: "Transpose Matrix", difficulty: "Easy" },
            { name: "Rotate Image", difficulty: "Medium" },
            { name: "Spiral Matrix", difficulty: "Medium" },
            { name: "Set Matrix Zeroes", difficulty: "Medium" },
            { name: "Happy Number", difficulty: "Easy" },
            { name: "Plus One", difficulty: "Easy" },
            { name: "Roman to Integer", difficulty: "Easy" },
            { name: "Pow(x, n)", difficulty: "Medium" },
            { name: "Multiply Strings", difficulty: "Medium" },
            { name: "Detect Squares", difficulty: "Medium" }
        ]
    },
    {
        title: "Bit Manipulation",
        problems: [
            { name: "Single Number", difficulty: "Easy" },
            { name: "Number of 1 Bits", difficulty: "Easy" },
            { name: "Counting Bits", difficulty: "Easy" },
            { name: "Add Binary", difficulty: "Easy" },
            { name: "Reverse Bits", difficulty: "Easy" },
            { name: "Missing Number", difficulty: "Easy" },
            { name: "Sum of Two Integers", difficulty: "Medium" },
            { name: "Reverse Integer", difficulty: "Medium" },
            { name: "Bitwise AND of Numbers Range", difficulty: "Medium" },
            { name: "Minimum Array End", difficulty: "Medium" }
        ]
    }
];

export default problemCategories;