# Backend Integration Guide

This project has been refactored to use a service-based data fetching layer. This abstraction isolates the UI components from the data source, making it easy to replace the current mock data with a real backend API.

## Project Structure

- **`src/types/index.ts`**: Contains all strict TypeScript interfaces defining the data contracts.
- **`src/services/api.ts`**: The central service layer. All data fetching and form submissions go through this file.
- **`public/datas/`**: (DEPRECATED for UI) These files now only serve as the source for mock data in the service layer.

## How to Integrate Your Backend

### 1. Update the API Service

To connect to your real API, modify `src/services/api.ts`. 

Each function currently returns a promise with mock data. You should replace the internal logic with standard `fetch` or `axios` calls.

**Example: Replacing Mock Products with API Call**

```typescript
// src/services/api.ts

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return fallback or handle error as needed
  }
}
```

### 2. Form Submissions

The contact and newsletter forms are already wired to service functions:

- `submitContactForm(data: ContactFormData)`
- `subscribeNewsletter(email: string)`

**Example: Connecting the Contact Form**

```typescript
export async function submitContactForm(data: any): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    return { 
      success: response.ok, 
      message: response.ok ? "Success" : "Error from server" 
    };
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}
```

### 3. Environment Variables

Recommended environment variables to add to your `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://api.yourbackend.com/v1
```

## UI Pattern for Data Fetching

### Client Components
Most interactive sections (Shop, Blog Grid, Forms) use `useState` and `useEffect` to fetch data from the service layer upon mounting.

### Server Components
Static or SEO-critical pages (Blog Details, Legal pages, About sections) use `async/await` directly within the component to fetch data from the service layer at build/request time.

## Support
The UI components are already built to handle the loading states (where applicable) and the asynchronous nature of the service layer. Ensure your API responses match the interfaces defined in `src/types/index.ts`.
