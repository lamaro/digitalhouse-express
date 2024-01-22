const httpPosts = [
  {
    id: 1,
    title: "Introduction to HTTP",
    comments: [
      { id: 1, content: "Great overview!" },
      { id: 2, content: "Could you elaborate on HTTP methods?" },
      { id: 3, content: "I found this very helpful, thanks!" },
    ],
  },
  {
    id: 2,
    title: "HTTP Request Methods",
    comments: [
      { id: 1, content: "GET is so simple and useful!" },
      { id: 2, content: "POST is crucial for form submissions." },
      { id: 3, content: "What's the difference between PUT and PATCH?" },
      { id: 4, content: "DELETE is powerful, but use it carefully." },
    ],
  },
  {
    id: 3,
    title: "HTTP Status Codes",
    comments: [
      { id: 1, content: "HTTP 404 - Not Found is the most common one, I guess." },
      { id: 2, content: "I always get confused with 403 and 401." },
      { id: 3, content: "200 OK is what we all want to see, right?" },
    ],
  },
  {
    id: 4,
    title: "HTTP Headers",
    comments: [
      { id: 1, content: "Headers make HTTP flexible and extensible." },
      { id: 2, content: "Content-Type header is crucial for data interpretation." },
      { id: 3, content: "What are some common security-related headers?" },
    ],
  },
  {
    id: 5,
    title: "Cookies and Sessions in HTTP",
    comments: [
      { id: 1, content: "Cookies can be both useful and annoying." },
      { id: 2, content: "How does session management work in HTTP?" },
      { id: 3, content: "Managing cookies securely is a challenge." },
      { id: 4, content: "Ever dealt with SameSite cookie attribute?" },
    ],
  },
  {
    id: 6,
    title: "HTTP/2 and Beyond",
    comments: [
      { id: 1, content: "HTTP/2 multiplexing is a game-changer." },
      { id: 2, content: "QUIC protocol seems promising for the future." },
      { id: 3, content: "What benefits does HTTP/3 bring?" },
    ],
  },
  {
    id: 7,
    title: "CORS in HTTP",
    comments: [
      { id: 1, content: "Dealing with CORS issues can be frustrating." },
      { id: 2, content: "What are the security implications of CORS?" },
      { id: 3, content: "CORS preflight requests, when are they necessary?" },
    ],
  },
  {
    id: 8,
    title: "RESTful APIs and HTTP",
    comments: [
      { id: 1, content: "REST is a popular architectural style for APIs." },
      { id: 2, content: "HATEOAS, how does it fit into RESTful APIs?" },
      { id: 3, content: "What are some best practices for RESTful API design?" },
    ],
  },
  {
    id: 9,
    title: "WebSockets and Real-Time Communication",
    comments: [
      { id: 1, content: "WebSockets are great for real-time applications." },
      { id: 2, content: "How do WebSockets differ from traditional HTTP?" },
      { id: 3, content: "Any security considerations with WebSockets?" },
    ],
  },
  {
    id: 10,
    title: "HTTP Security Best Practices",
    comments: [
      { id: 1, content: "SSL/TLS is essential for secure communication." },
      { id: 2, content: "How to prevent common security vulnerabilities in HTTP?" },
      { id: 3, content: "Security headers every web developer should know." },
      { id: 4, content: "Are there any specific security concerns with HTTP/3?" },
    ],
  },
];