# Test task for Finofo. Rustam Kholmurodov.

## Running the Project

1. Install dependencies:  
   `npm i`

2. Start development server:  
   `npm run dev`

3. Build for production:  
   `npm run build`

## Notes

1. I’ve structured this project with inspiration from the Next.js APP Router project structure, which I’ve worked with for the last 1.5 years. Instead of multiple pages, you’ll find a single `/app` folder with two containers: "fruits" and "jar."

2. State management is handled using Redux and RTK Query. While it may seem like overkill for this simple project, it helped avoid props drilling, useReducer, and async/await with try/catch.

3. The design isn’t visually appealing—I'm aware. Initially, I aimed for a beautiful and animated interface, but time constraints led me to prioritize a user-friendly and functional design. If needed, I can improve it. You can check my portfolio for examples of beautifully designed websites.

4. I avoided using a `table` tag since I didn’t find it necessary for this small data set, though the layout of the fruit cards can be easily changed if desired.

5. The entire functionality for adding items to the jar is managed within a Redux slice for convenience.

6. I could extend the functionality of this app (e.g., adding remove/clear from jar, creating a new fruit, etc.), but I focused only on the tasks to avoid additional testing and checking from people who will review my code.

7. The provided API endpoint has CORS issues when deployed to Netlify, which prevents it from being accessed in production. However, the application works correctly in the development environment by using a proxy. Therefore, there won’t be a Netlify link to test the app. To run the project, please test it locally by following the instructions to install dependencies and start the development server. If a demo link is required, I can create a Supabase dummy API to resolve the CORS issue and deploy the app properly for demonstration.

8. I can’t wait to wear a cowboy hat while standing between the mountains and Calgary, enjoying the beautiful view, feeling completely at peace knowing that I already have a job at such a wonderful company.
