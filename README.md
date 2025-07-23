This is a solution to the IP address tracker challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.
Table of Contents

Overview

The Challenge
Screenshot
Links


My Process

Built With
What I Learned
Issues Encountered
Continued Development
Useful Resources


Author
Acknowledgments
Overview
The Challenge

Users should be able to:
View the optimal layout for each page depending on their device's screen size
See hover states for all interactive elements on the page
See their own IP address on the map on the initial page load
Search for any IP addresses or domains and see the key information and location

Screenshot
<img width="1884" height="1032" alt="Screenshot 2025-07-22 at 11 07 29 PM" src="https://github.com/user-attachments/assets/ca6576c9-c027-4e81-947b-a91b11711750" />


Solution URL: https://github.com/miuris/IP-Address-Tracker
Live Site URL: https://miuris.github.io/


Built With:
Semantic HTML5 markup
CSS custom properties
Flexbox
CSS Grid
Mobile-first workflow
JavaScript (ES6+)
Leaflet.js - Interactive maps
IP Geolocation API

What I Learned
This project taught me valuable lessons about working with third-party APIs, handling asynchronous operations, and implementing interactive maps. I gained experience with:
API integration and error handling
Geolocation services and map libraries
Responsive design with complex layouts
Input validation and sanitization
CORS policy management

Issues Encountered (Too many to remember, but I'm fueled by the challenge this project has presented):
This project presented several challenging debugging scenarios that taught me valuable problem-solving skills, determination, and persistence. It doesn't matter how many times you fail only how many times you get up!

API Integration Issues
CORS Policy Violations: Initially faced CORS errors when making API requests from the frontend. Had to understand the difference between development and production environments and implement proper API solutions.
API Rate Limiting: Exceeded the free tier limits during testing, causing unexpected 429 errors. Learned to implement request throttling and proper error handling.
Invalid API Responses: Spent considerable time debugging malformed API responses for certain IP addresses and domains, requiring robust input validation.

Map Implementation Challenges
Leaflet.js Integration: Struggled with properly initializing the map container and handling dynamic marker updates. The map would sometimes not render correctly on initial load.
Coordinate Precision: Encountered issues with map accuracy when API returned approximate coordinates, leading to markers appearing in wrong locations.
Map Responsiveness: Difficult to make the map component properly responsive across different screen sizes while maintaining functionality.

Styling and Layout Problems
CSS Grid Complexity: The information panel layout was challenging to implement responsively. Spent significant time debugging grid item alignment and spacing issues.
Mobile Optimization: Input field and button positioning on mobile devices required multiple iterations to achieve the desired design.
Cross-browser Compatibility: Discovered styling inconsistencies between Chrome and Firefox, particularly with flexbox implementations.

Input Validation and Edge Cases (I couldn't get my function to effectively validate tasks)
IP Address Validation: Initially didn't account for IPv6 addresses and various domain formats, causing validation failures.
Empty State Handling: Application would break when users submitted empty queries or invalid inputs.
Loading States: Couldn't implement proper loading indicators, leading to poor user experience during API calls.

Performance and Optimization

Memory Leaks: Map instances weren't being properly cleaned up when updating locations, causing performance degradation.
Unnecessary Re-renders: Initial implementation caused excessive API calls due to poor state management.

Version Control Nightmare

Git Repository Corruption: Encountered a critical issue where my local Git repository became corrupted during development, losing several commits of progress.
Branch Management Confusion: Made mistakes with branch merging that resulted in conflicting file states and lost work.
Time Constraints Solution: Due to project deadlines and the complexity of resolving the Git issues, I had to resort to manually copying and pasting all project files into a fresh remote repository. While not ideal, I submitted files successfuly.

Regular commits and backups
Understanding Git fundamentals before starting complex projects
Having contingency plans for version control failures
The value of proper Git workflow practices


Environment and Dependencies
Node Version Conflicts: Encountered compatibility issues between different Node.js versions during development setup.
Package Dependencies: Some packages had conflicting peer dependencies that required careful resolution.
After a failed attempt at working through my Grid proficiency, I deleted the files and started the project over. 

Continued Development
Areas I want to focus on in future projects:

Advanced Git Workflows: Properly learning Git branching strategies, conflict resolution, and recovery techniques to avoid manual file copying situations.
Error Boundary Implementation: Creating more robust error handling for API failures and edge cases.
Testing Implementation: Adding unit and integration tests to catch issues earlier in development.
Performance Optimization: Implementing better caching strategies and optimizing API usage.
Accessibility Improvements: Ensuring the application is fully accessible with proper ARIA labels and keyboard navigation.

Useful Resources
https://www.w3schools.com/html/html_formatting.asp
https://www.youtube.com/watch?v=ly9vOqYFuMI&t=700s- Tutorial includes React.js
Leaflet.js Documentation - Comprehensive guide for map implementation
IP Geolocation API Docs - Essential for understanding API limitations and responses
MDN Web Docs - Fetch API - Helped with proper API error handling
CSS Grid Guide - Invaluable for responsive layout implementation
Git Recovery Strategies - What I should have known before my repository issues


Author

Miuris Gutierrez

Acknowledgments
Special thanks to the StackOverflow, Frontend Mentor, and Google community for their support during the debugging process, particularly with the API integration challenges. The experience of overcoming these technical hurdles, including the version control setbacks, has made me a more resilient developer and highlighted the importance of proper development practices and backup strategies.
