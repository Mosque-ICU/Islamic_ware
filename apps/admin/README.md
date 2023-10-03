````markdown
# Micu Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To begin, follow these steps:

1. Run the development server using one of the following commands:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
````

The development server will be accessible at [http://mosque.icu:3000](http://mosque.icu:3000). However, please note that to access the development server, you need to use the subdomain `dev.`. For example, access it via [http://dev.mosque.icu:3000](http://dev.mosque.icu:3000).

> **Note:** Setting this up requires some additional steps.

To access the development server via the subdomain "dev.mosque.icu" instead of "dev.localhost:3000", you'll need to make adjustments to your local environment and DNS settings. Here's a general outline of the steps you might need to take:

1.  **Edit Hosts File (Windows/macOS/Linux):**

    - On Windows: Open the file `C:\Windows\System32\drivers\etc\hosts` in a text editor with administrative privileges. Add the following line:
      ```
      127.0.0.1 dev.mosque.icu
      ```
    - On macOS/Linux: Open the terminal and edit the `/etc/hosts` file using a command like:
      ```
      sudo nano /etc/hosts
      ```
      Add the same line as above to the file.

2.  **Server Configuration:**

    - Update your server configuration to listen for requests on `dev.mosque.icu` instead of `localhost`.

3.  **DNS Configuration:**

    - If you want this subdomain to be accessible beyond your local machine, you'll need to configure DNS settings for the domain `mosque.icu` to point to your server's IP address. This involves updating DNS records on your domain registrar's website.

4.  **SSL/TLS Configuration (Optional but Recommended):**

    - If you're using HTTPS (recommended for security reasons), set up a valid SSL certificate for the subdomain `dev.mosque.icu`. Services like Let's Encrypt offer free SSL certificates.

5.  **Browser Testing:**

    - After making the necessary changes, access the development server via the URL [http://dev.mosque.icu:3000](http://dev.mosque.icu:3000) in your browser.

Please note that configuring custom domains and subdomains involves networking, domain management, and server configuration. If you're unfamiliar, seek guidance from someone experienced or refer to specific documentation.

2. You can start editing the page by modifying `app/page.tsx`. The page will auto-update as you edit the file.

3. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also contribute to the [Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deploy on Vercel

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) by the creators of Next.js.

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

```

```
