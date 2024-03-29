import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [books, setBooks] = useState([
    {
      kind: "books#volume",
      id: "jLkrDwAAQBAJ",
      etag: "QQ5w4PS8pKI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/jLkrDwAAQBAJ",
      volumeInfo: {
        title: "React and React Native",
        authors: ["Adam Boduch"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2017-03-08",
        description:
          "Use React and React Native to build applications for desktop browsers, mobile browsers, and even as native mobile apps About This Book Build React and React Native applications using familiar component concepts Dive deep into each platform, from routing in React to creating native mobile applications that can run offline Use Facebook's Relay, React and GraphQL technologies, to create a unified architecture that powers both web and native applications Who This Book Is For This book is written for any JavaScript developer—beginner or expert—who wants to start learning how to put both of Facebook's UI libraries to work. No knowledge of React is needed, though a working knowledge of ES2015 will help you follow along better. What You Will Learn Craft reusable React components Control navigation using the React Router to help keep your UI in sync with URLs Build isomorphic web applications using Node.js Use the Flexbox layout model to create responsive mobile designs Leverage the native APIs of Android and iOS to build engaging applications with React Native Respond to gestures in a way that's intuitive for the user Use Relay to build a unified data architecture for your React UIs In Detail React and React Native allow you to build cross-platform desktop and mobile applications using Facebook's innovative UI libraries. Combined with the Flux data architecture and Relay, you can now create powerful and feature-complete applications from just one code base! This book is split into three parts. The first part shows you how to start crafting composable UIs using React, from rendering with JSX and creating reusable components through to routing and creating isomorphic applications that run on Node. We then move on to showing you how to take the concepts of React and apply them to building Native UIs using React Native. You'll find out how to build responsive and streamlined UIs that can properly handle user interactions in a mobile environment. You'll also learn how to access device-specific APIs such as the geolocation API, and how to handle offline development with React Native. Finally, we'll tie all of these skills together and shows you how you can create React applications that run on every major platform. As well as understanding application state in depth, you'll learn how to leverage Relay to make feature-complete, data-driven web and native mobile applications. Style and approach Split into three major sections to help organize your learning, this hands-on, code-first book will help you get up to speed with React and React Native—the UI framework that powers Netflix, Yahoo, and Facebook.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781786469571",
          },
          {
            type: "ISBN_10",
            identifier: "178646957X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 485,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=jLkrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=jLkrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=jLkrDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=jLkrDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=jLkrDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3866.85,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3866.85,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=jLkrDwAAQBAJ&rdid=book-jLkrDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3866850000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3866850000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=jLkrDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Use React and React Native to build applications for desktop browsers, mobile browsers, and even as native mobile apps About This Book Build React and React Native applications using familiar component concepts Dive deep into each platform, ...",
      },
    },
    {
      kind: "books#volume",
      id: "2HvGDwAAQBAJ",
      etag: "LlsF6fMY4R0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2HvGDwAAQBAJ",
      volumeInfo: {
        title: "React Projects",
        subtitle:
          "Build 12 real-world applications from scratch using React, React Native, and React 360",
        authors: ["Roy Derks"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-12-20",
        description:
          "Build cross-platform applications of varying complexity for the web, mobile, and VR devices using React tooling Key FeaturesBuild React applications at scale using effective React patterns and best practicesExplore React features such as Hooks, the Context API, and the Suspense APIExtend React’s integration with React Native for building cross-platform mobile apps and gamesBook Description Developed by Facebook, React is a popular library for building impressive user interfaces. React extends its capabilities to the mobile platform using the React Native framework and integrates with popular web and mobile tools to build scalable applications. React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools such as GraphQL, Expo, and React 360. You'll start building a real-world project right from the first chapter and get hands on with developing scalable applications as you advance to building more complex projects. Throughout the book, you'll use the latest versions of React and React Native to explore features such as Higher Order Components (HOC), Context, and Hooks on multiple platforms, which will help you build full stack web and mobile applications efficiently. Finally, you'll delve into unit testing with Jest to build test-driven apps. By the end of this React book, you'll have developed the skills necessary to start building scalable React apps across web and mobile platforms. What you will learnCreate a wide range of applications using various modern React tools and frameworksDiscover how React Hooks modernize state management for React appsDevelop progressive web applications using React componentsBuild test-driven React applications using the Jest and Enzyme frameworksUnderstand full stack development using React, Apollo, and GraphQLPerform server-side rendering using React and React RouterDesign gestures and animations for a cross-platform game using React NativeWho this book is for The book is for JavaScript developers who want to explore React tooling and frameworks for building cross-platform applications. Basic knowledge of web development, ECMAScript, and React will assist with understanding key concepts covered in this book.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789953398",
          },
          {
            type: "ISBN_10",
            identifier: "1789953391",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 465,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.3.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=2HvGDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2HvGDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2HvGDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2371.79,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2371.79,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2HvGDwAAQBAJ&rdid=book-2HvGDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2371790000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2371790000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2HvGDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Basic knowledge of web development, ECMAScript, and React will assist with understanding key concepts covered in this book.",
      },
    },
    {
      kind: "books#volume",
      id: "XCLhDwAAQBAJ",
      etag: "DOV0umAITOU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/XCLhDwAAQBAJ",
      volumeInfo: {
        title: "React and React Native",
        subtitle:
          "A complete hands-on guide to modern web and mobile development with React.js",
        authors: ["Adam Boduch", "Roy Derks"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2020-04-30",
        description:
          "Get up to speed with React, React Native, GraphQL and Apollo for building cross-platform native apps with the help of practical examples Key FeaturesCovers the latest features of React such as Hooks, Suspense, NativeBase, and Apollo in this updated third editionGet to grips with the React architecture for writing easy-to-manage web and mobile applicationsUnderstand GraphQL and Apollo for building a scalable backend for your cross-platform appsBook Description React and React Native, Facebook's innovative User Interface (UI) libraries, are designed to help you build robust cross-platform web and mobile applications. This updated third edition is improved and updated to cover the latest version of React. The book particularly focuses on the latest developments in the React ecosystem, such as modern Hook implementations, code splitting using lazy components and Suspense, user interface framework components using Material-UI, and Apollo. In terms of React Native, the book has been updated to version 0.62 and demonstrates how to apply native UI components for your existing mobile apps using NativeBase. You will begin by learning about the essential building blocks of React components. Next, you'll progress to working with higher-level functionalities in application development, before putting this knowledge to use by developing user interface components for the web and for native platforms. In the concluding chapters, you'll learn how to bring your application together with a robust data architecture. By the end of this book, you'll be able to build React applications for the web and React Native applications for multiple mobile platforms. What you will learnDelve into the React architecture, component properties, state, and contextGet to grips with React Hooks for handling functions and componentsImplement code splitting in React using lazy components and SuspenseBuild robust user interfaces for mobile and desktop apps using Material-UIWrite shared components for Android and iOS mobile apps using React NativeSimplify layout design for React Native apps using NativeBaseWrite GraphQL schemas to power web and mobile appsImplement web and mobile components that are driven by ApolloWho this book is for This book is for any JavaScript developer who wants to start learning how to use Facebook's UI libraries, React and React Native, for mobile and web application development. Although no prior knowledge of React is needed, working knowledge of JavaScript programming will help you understand the concepts covered in the book more effectively.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781839212437",
          },
          {
            type: "ISBN_10",
            identifier: "1839212438",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 505,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.3.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=XCLhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=XCLhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=XCLhDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=3&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=XCLhDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=XCLhDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 5888.19,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 5888.19,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=XCLhDwAAQBAJ&rdid=book-XCLhDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 5888190000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 5888190000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=XCLhDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "By the end of this book, you&#39;ll be able to build React applications for the web and React Native applications for multiple mobile platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "CSj5DwAAQBAJ",
      etag: "jNGVgmvxS7Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/CSj5DwAAQBAJ",
      volumeInfo: {
        title: "The The React Workshop",
        subtitle:
          "Get started with building web applications using practical tips and examples from React use cases",
        authors: [
          "Brandon Richey",
          "Ryan Yu",
          "Endre Vegh",
          "Theofanis Despoudis",
          "Anton Punith",
          "Florian Sloot",
        ],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2020-08-21",
        description:
          "Work through engaging exercises and activities and gain practical skills to make your web applications function effortlessly with the help of React Key FeaturesExplore the React environment by creating live projectsSolve real-world problems relating to building modern web applicationsGain a thorough understanding of how data moves through different React componentsBook Description Are you interested in how React takes command of the view layer for web and mobile apps and changes the data of large web applications without needing to reload the page? This workshop will help you learn how and show you how to develop and enhance web apps using the features of the React framework with interesting examples and exercises. The workshop starts by demonstrating how to create your first React project. You’ll tap into React’s popular feature JSX to develop templates and use DOM events to make your project interactive. Next, you’ll focus on the lifecycle of the React component and understand how components are created, mounted, unmounted, and destroyed. Later, you’ll create and customize components to understand the data flow in React and how props and state communicate between components. You’ll also use Formik to create forms in React to explore the concept of controlled and uncontrolled components and even play with React Router to navigate between React components. The chapters that follow will help you build an interesting image-search app to fetch data from the outside world and populate the data to the React app. Finally, you’ll understand what ref API is and how it is used to manipulate DOM in an imperative way. By the end of this React book, you’ll have the skills you need to set up and create web apps using React. What you will learnUse JSX to include logic in the view layer of applicationsGet familiar with the important methods and events in the React lifecycleDistinguish between class and functional component syntaxesCreate forms with Formik and handle errorsUnderstand the React Hooks API and the problems it can solveFetch outside data using the Axios library and populate the data to the appWho this book is for The React Workshop is for web developers and programmers who are looking to learn React and use it for creating and enhancing web applications. Although the workshop is for beginners, prior knowledge of JavaScript programming and HTML and CSS is necessary to easily understand the concepts that are covered.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781838821661",
          },
          {
            type: "ISBN_10",
            identifier: "183882166X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 805,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.3.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=CSj5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=CSj5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=CSj5DwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=4&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=CSj5DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=CSj5DwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=CSj5DwAAQBAJ&rdid=book-CSj5DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=CSj5DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "What you will learnUse JSX to include logic in the view layer of applicationsGet familiar with the important methods and events in the React lifecycleDistinguish between class and functional component syntaxesCreate forms with Formik and ...",
      },
    },
    {
      kind: "books#volume",
      id: "Iv1wDwAAQBAJ",
      etag: "eTFo+WsaXRg",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Iv1wDwAAQBAJ",
      volumeInfo: {
        title: "Hands-On Design Patterns with React Native",
        subtitle:
          "Proven techniques and patterns for efficient native mobile development with JavaScript",
        authors: ["Mateusz Grzesiukiewicz"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-09-29",
        description:
          "Learn how to write cross platform React Native code by using effective design patterns in the JavaScript world. Get to know industry standard patterns as well as situational patterns. Decouple your application with these set of “Idea patterns”. Key FeaturesMobile development in React Native should be done in a reusable way. Learn how to build scalable applications using JavaScript patterns that are battle tested.Try effective techniques on your own using over 80 standalone examples.Book Description React Native helps developers reuse code across different mobile platforms like iOS and Android. This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams. The book will focus only on the patterns that are relevant to JavaScript, ECMAScript, React and React Native. However, you can successfully transfer a lot of the skills and techniques to other languages. I call them “Idea patterns”. This book will start with the most standard development patterns in React like component building patterns, styling patterns in React Native and then extend these patterns to your mobile application using real world practical examples. Each chapter comes with full, separate source code of applications that you can build and run on your phone. The book is also diving into architectural patterns. Especially how to adapt MVC to React environment. You will learn Flux architecture and how Redux is implementing it. Each approach will be presented with its pros and cons. You will learn how to work with external data sources using libraries like Redux thunk and Redux Saga. The end goal is the ability to recognize the best solution for a given problem for your next mobile application. What you will learnExplore the design Patterns in React NativeLearn the best practices for React Native developmentExplore common React patterns that are highly used within React Native developmentLearn to decouple components and use dependency injection in your applicationsExplore the best ways of fetching data from the backend systemsLearn the styling patterns and how to implement custom mobile designsExplore the best ways to organize your application code in big codebasesWho this book is for The ideal target audience for this book are people eager to learn React Native design patterns who already know the basics of JavaScript. We can assume that the target audience already knows how to write Hello World in JavaScript and know what are the functions, recursive functions, JavaScript types and loops.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788999540",
          },
          {
            type: "ISBN_10",
            identifier: "1788999541",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 297,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Iv1wDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=5&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Iv1wDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Iv1wDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Iv1wDwAAQBAJ&rdid=book-Iv1wDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Iv1wDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams.",
      },
    },
    {
      kind: "books#volume",
      id: "pXuUEAAAQBAJ",
      etag: "lImD8Bp+Mr0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/pXuUEAAAQBAJ",
      volumeInfo: {
        title: "Professional React Native",
        subtitle:
          "Expert techniques and solutions for building high-quality, cross-platform, production-ready apps",
        authors: ["Alexander Benedikt Kuttig"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2022-10-31",
        description:
          "Learn how React Native works under the hood and what this means for building large-scale, cross-platform, production-ready applications without compromising on the quality and performance Key FeaturesExplore a modern approach to React Native, covering state management, animations, gestures, and moreImplement best practices and practical techniques for creating large-scale, production-ready appsCreate a development process including workflow automation with GitHub Actions, Fastlane, and BitriseBook Description The React Native framework offers a range of powerful features that make it possible to efficiently build high-quality, easy-to-maintain frontend applications across multiple platforms such as iOS, Android, Linux, Mac OS X, Windows, and the web, helping you save both time and money. And this book is your key to unlocking its capabilities. Professional React Native provides the ultimate coverage of essential concepts, best practices, advanced processes, and tips for everyday developer problems. The book makes it easy to understand how React Native works under the hood using step-by-step explanations and practical examples so you can use this knowledge to develop highly performant apps. As you follow along, you'll learn the difference between React and React Native, navigate the React Native ecosystem, and revisit the basics of JavaScript and TypeScript needed to create a React Native application. What's more, you'll work with animations and even control your app with gestures. Finally, you'll be able to structure larger apps and improve developer efficiency through automated processes, testing, and continuous integration. By the end of this React native app development book, you'll have gained the confidence to build high-performance apps for multiple platforms, even on a bigger scale. What you will learnBecome familiar with how React Native works under the hoodUnderstand how to make the most of React Native for app developmentExplore different approaches to building apps across various platformsBecome familiar with process automation and automated testingContribute to open source code and structure your own code libraryUnderstand how to set up the architecture for bigger React Native projectsWho this book is for This book is for developers who want to get started with React Native as well as experienced React Native developers interested in building professional cross-platform applications. Familiarity with the basics of JavaScript (including its syntax) and general software engineering concepts, such as data types, control flows, and server/client structures, is required. Although useful, experience with React Native is not necessary.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781800561199",
          },
          {
            type: "ISBN_10",
            identifier: "1800561199",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 269,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.4.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=pXuUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=pXuUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=pXuUEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=6&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=pXuUEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=pXuUEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2811.93,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2811.93,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=pXuUEAAAQBAJ&rdid=book-pXuUEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2811930000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2811930000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=pXuUEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "And this book is your key to unlocking its capabilities. Professional React Native provides the ultimate coverage of essential concepts, best practices, advanced processes, and tips for everyday developer problems.",
      },
    },
    {
      kind: "books#volume",
      id: "OswftAEACAAJ",
      etag: "fd1MBLt3bJE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/OswftAEACAAJ",
      volumeInfo: {
        title: "React. Js Book",
        subtitle: "Learning React JavaScript Library from Scratch",
        authors: ["Greg Sidelnikov"],
        publishedDate: "2017-03-17",
        description:
          "My fourth web development book is simply called React.js Book. It will walk you step by step through the process of setting up a development environment and learning Reactive programming from start to finish. React is a library unlike any other I have worked with. Unlike jQuery where you had to learn a number of methods that do very specific things, it's largely inspired by a programming methodology for creating fast web applications.In addition you will be expected to know or at least be briefly familiar with prerequisite knowledge of other web development tools such as Node.js, NPM, Babel, JSX and WebPack. These are not required elements of programming with React, but without them things would be tough.As of 2017, Reactive programming is an alternative way of thinking about web applications. It provides software patterns that make your web app extremely responsive to user input and generally feel faster to the end-user (people who are using your application.) The Virtual DOM alone is enough of a reason to switch to React. Programming with React library, is a lot more than just learning about and using React objects, components, states, props and methods. It requires previous experience with JavaScript and at times assumes knowledge of software principles not inherent to React library itself.This book is not a list of object names, methods and functions with side explanations of what they do. Rather, it deals with the said principles involved in React programming thought up by the creators of React library. Principles that are usually understood by professional web developers and software engineers.For all these reasons stated above, this book will gradually walk you through the process of becoming familiar with React library, starting from basic concepts. Gradually, we will move toward more advanced subjects. So, prepare to be educated",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1521546185",
          },
          {
            type: "ISBN_13",
            identifier: "9781521546185",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 117,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=OswftAEACAAJ&dq=react&hl=&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=OswftAEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Js_Book.html?hl=&id=OswftAEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=OswftAEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "These are not required elements of programming with React, but without them things would be tough.As of 2017, Reactive programming is an alternative way of thinking about web applications.",
      },
    },
    {
      kind: "books#volume",
      id: "fCWGDwAAQBAJ",
      etag: "feeSUSlr3TQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/fCWGDwAAQBAJ",
      volumeInfo: {
        title: "React Native Cookbook",
        subtitle:
          "Recipes for solving common React Native development problems",
        authors: ["Dan Ward"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-01-31",
        description:
          "Improve your React Native mobile development skills and transition from web to mobile development with this solution-packed guide Key FeaturesLearn strategies and techniques to face React Native mobile development challenges head-onExplore ways to use iOS and Android for React Native development to maximize code reuse and cohesionBuild engaging user experiences with React NativeBook Description If you are a developer looking to create mobile applications with maximized code reusability and minimized cost, React Native is what you need. With this practical guide, you'll be able to build attractive UIs, tackle common problems in mobile development, and achieve improved performance in mobile environments. This book starts by covering the common techniques for React Native customization and helps you set up your development platforms. Over the course of the book, you'll work through a wide variety of recipes that help you create, style, and animate your apps with built-in React Native and custom third-party components. You'll also develop real-world browser-based authentication, build a fully functional audio player, and integrate Google Maps in your apps. This book will help you explore different strategies for working with data, including leveraging the popular Redux library and optimizing your app's dataflow. You'll also learn how to write native device functionality for new and existing React Native projects and how app deployment works. By the end of this book, you'll be equipped with tips and tricks to write efficient code and have the skills to build full iOS and Android applications using React Native. What you will learnBuild UI features and components using React NativeCreate advanced animations for UI componentsDevelop universal apps that run on phones and tabletsLeverage Redux to manage application flow and dataExpose both custom native UI components and application logic to React NativeEmploy open source third-party plugins to create React Native appsWho this book is for If you're a JavaScript developer looking for a practical guide for developing feature-rich mobile apps using React Native, this book is for you. Though not necessary, some experience of working with React will help you understand the React Native concepts covered in this book easily. While React Native development can be done on a Windows machine, certain aspects, such as running your apps on iOS devices and in the iOS simulator, or editing native code with Xcode, can only be done with a Mac.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788990431",
          },
          {
            type: "ISBN_10",
            identifier: "1788990439",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 583,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.4.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=fCWGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=fCWGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=fCWGDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=8&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=fCWGDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=fCWGDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2723.43,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2723.43,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=fCWGDwAAQBAJ&rdid=book-fCWGDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2723430000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2723430000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=fCWGDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book starts by covering the common techniques for React Native customization and helps you set up your development platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "jUvZDQAAQBAJ",
      etag: "M+UqRWiF6hc",
      selfLink: "https://www.googleapis.com/books/v1/volumes/jUvZDQAAQBAJ",
      volumeInfo: {
        title: "React: Building Modern Web Applications",
        authors: [
          "Jonathan Hayward",
          "Artemij Fedosejev",
          "Narayan Prusty",
          "Adam Horton",
          "Ryan Vice",
          "Ethan Holmes",
          "Tom Bray",
        ],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2016-06-10",
        description:
          "Master the art of building dynamic, modern web applications with React About This Book Learn the hot new frontend web framework from Facebook – ReactJS, an easy way of developing the V in MVC and a better approach to software engineering in JavaScript A fast-paced guide to designing and building scalable and maintainable web apps with React.js Learn all the new ES6 features and be among the most prominent JavaScript developers who can write efficient JS programs as per the latest standards Master the art of building modern web applications using React Learn to build modern native iOS and Android applications using JavaScript and the incredible power of React Who This Book Is For This course is for web developers that want to unlock high performance dynamism in the applications that they create. If you want a comprehensive journey into one of the most important JavaScript frameworks around today, dive into this course. What You Will Learn Take control of the front end with reactive JavaScript programming Discover what ReactJS offers your development - before mastering it Create React elements with properties and children Use JSX to speed up your React development process Test your React components with the Jest test framework Learn the latest syntax of ES6 Execute ES6 in a non-supported ES6 environment Learn the principles of object-oriented programming Create a complete single-page application Use an application design plan to write smarter, more meaningful code Learn how to use animations to give extra style to your application Get to grips with the React Native environment Write your own custom native UI components Integrate native modules in Objective-C and Java that interact with JavaScript In Detail ReactJS has helped to transform the web as we know it. Designed by Facebook to help developers build rapid, responsive UI that can deal with data-intensive usage, it's an essential component in any web developer's skillset. This ReactJS course, in five connected modules, provides you with a fast, engaging and practical route into ReactJS—so you can build powerful, elegant, and modern web applications. Beginning with the Reactive Programming with JavaScript module, you will learn how to take advantage of a reactive and functional programming paradigm to rethink how you approach your JavaScript code. It's built to help you understand the concepts, relevant and applicable for any frontend developer. You'll then dive a little deeper into ReactJS. The second module gives you a rapid look through the fundamentals of ReactJS, showing you how to build a basic application and demonstrating how to implement the Flux architecture. In the third module you will get to grips with ES6—this will make you a more fluent JavaScript developer, giving you control over ReactJS. You can put your old JavaScript hacks aside and instead explore how to create ES6 custom iterators. In the final two modules you'll learn how to fully master ReactJS, exploring its wider ecosystem of tools that have helped to make it one of the most important tools in web development today. Ending with insights and guidance on React Native, the tool built for today's demand for native, intuitive user experiences and interfaces, with this course you can be confident in building dynamic and modern apps with React. Style and approach Consisting of five separate modules, journey from the fundamentals of reactive programming to the exciting possibilities of React Native. Each module builds on each other, helping you to incrementally develop your skills and knowledge.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781786462848",
          },
          {
            type: "ISBN_10",
            identifier: "1786462842",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 910,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 3,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=jUvZDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=jUvZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=jUvZDQAAQBAJ&printsec=frontcover&dq=react&hl=&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=jUvZDQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=jUvZDQAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2105.11,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2105.11,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=jUvZDQAAQBAJ&rdid=book-jUvZDQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2105110000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2105110000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=jUvZDQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Master the art of building dynamic, modern web applications with React About This Book Learn the hot new frontend web framework from Facebook – ReactJS, an easy way of developing the V in MVC and a better approach to software engineering ...",
      },
    },
    {
      kind: "books#volume",
      id: "GPBbEAAAQBAJ",
      etag: "a+Yk7EMzvQo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/GPBbEAAAQBAJ",
      volumeInfo: {
        title: "Full-Stack Web Development with GraphQL and React",
        subtitle:
          "Taking React from frontend to full-stack with GraphQL and Apollo",
        authors: ["Sebastian Grebe"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2022-02-28",
        description:
          "Unleash the power of GraphQL, React 17, Node, and Express to build a scalable and production-ready application from scratch to be deployed on AWS Key FeaturesBuild full-stack applications with modern APIs using GraphQL and React HooksIntegrate Apollo into React and build frontend components using GraphQLImplement a self-updating notification pop-up with a unique GraphQL feature called SubscriptionsBook Description React and GraphQL, when combined, provide you with a very dynamic, efficient, and stable tech stack to build web-based applications. GraphQL is a modern solution for querying an API that represents an alternative to REST and is the next evolution in web development. This book guides you in creating a full-stack web application from scratch using modern web technologies such as Apollo, Express.js, Node.js, and React. First, you'll start by configuring and setting up your development environment. Next, the book demonstrates how to solve complex problems with GraphQL, such as abstracting multi-table database architectures and handling image uploads using Sequelize. You'll then build a complete Graphbook from scratch. While doing so, you'll cover the tricky parts of connecting React to the backend, and maintaining and synchronizing state. In addition to this, you'll also learn how to write Reusable React components and use React Hooks. Later chapters will guide you through querying data and authenticating users in order to enable user privacy. Finally, you'll explore how to deploy your application on AWS and ensure continuous deployment using Docker and CircleCI. By the end of this web development book, you'll have learned how to build and deploy scalable full-stack applications with ease using React and GraphQL. What you will learnBuild a GraphQL API by implementing models and schemas with Apollo and SequelizeSet up an Apollo Client and build frontend components using ReactWrite Reusable React components and use React HooksAuthenticate and query user data using GraphQLUse Mocha to write test cases for your full-stack applicationDeploy your application to AWS using Docker and CircleCIWho this book is for This React GraphQL book is for web developers familiar with React and GraphQL who want to enhance their skills and build full-stack applications using industry standards like React, Apollo, Node.js, and SQL at scale while learning to solve complex problems with GraphQL.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781801079174",
          },
          {
            type: "ISBN_10",
            identifier: "180107917X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 473,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=GPBbEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=GPBbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=GPBbEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=10&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=GPBbEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=GPBbEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=GPBbEAAAQBAJ&rdid=book-GPBbEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=GPBbEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book guides you in creating a full-stack web application from scratch using modern web technologies such as Apollo, Express.js, Node.js, and React. First, you&#39;ll start by configuring and setting up your development environment.",
      },
    },
    {
      kind: "books#volume",
      id: "EvwHzgEACAAJ",
      etag: "tY9GI1CiNfo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/EvwHzgEACAAJ",
      volumeInfo: {
        title: "React Js",
        subtitle:
          "Hands-On Full Stack Web Development Using React Js, 2nd Edition",
        authors: ["Nln Lnc", "Susan Fitzgerald"],
        publishedDate: "2020-10-14",
        description:
          "Facebook's React has changed the way we think about web applications and user interface development. Due to its design, you can use it beyond web. A feature known as the Virtual DOM enables this.In this chapter we'll go through some of the basic ideas behind the library so you understand React a little better before moving on.React is a JavaScript library that forces you to think in terms of components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state and where it belongs.Because state management is a difficult problem, a variety of solutions have appeared. In this book, we'll start by managing state ourselves and then push it to a Flux implementation known as Alt. There are also implementations available for several other alternatives, such as Redux, MobX, and Cerebral.React is pragmatic in the sense that it contains a set of escape hatches. If the React model doesn't work for you, it is still possible to revert back to something lower level. For instance, there are hooks that can be used to wrap older logic that relies on the DOM. This breaks the abstraction and ties your code to a specific environment, but sometimes that's the pragmatic thing to do.One of the fundamental problems of programming is how to deal with state. Suppose you are developing a user interface and want to show the same data in multiple places. How do you make sure the data is consistent?Historically we have mixed the concerns of the DOM and state and tried to manage it there. React solves this problem in a different way. It introduced the concept of the Virtual DOM to the masses.Virtual DOM exists on top of the actual DOM, or some other render target. It solves the state manipulation problem in its own way. Whenever changes are made to it, it figures out the best way to batch the changes to the underlying DOM structure. It is able to propagate changes across its virtual tree as in the image above.Virtual DOM PerformanceHandling the DOM manipulation this way can lead to increased performance. Manipulating the DOM by hand tends to be inefficient and is hard to optimize. By leaving the problem of DOM manipulation to a good implementation, you can save a lot of time and effort.React allows you to tune performance further by implementing hooks to adjust the way the virtual tree is updated. Though this is often an optional step.The biggest cost of Virtual DOM is that the implementation makes React quite big. You can expect the bundle sizes of small applications to be around 150-200 kB minified, React included. gzipping will help, but it's still big.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9798697691502",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 162,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=EvwHzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=EvwHzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=EvwHzgEACAAJ&dq=react&hl=&cd=11&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=EvwHzgEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Js.html?hl=&id=EvwHzgEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=EvwHzgEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, we&#39;ll start by managing state ourselves and then push it to a Flux implementation known as Alt.",
      },
    },
    {
      kind: "books#volume",
      id: "5_o8EAAAQBAJ",
      etag: "K/AB5hz+RX0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5_o8EAAAQBAJ",
      volumeInfo: {
        title: "React Cookbook",
        authors: ["David Griffiths", "Dawn Griffiths"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2021-08-11",
        description:
          "React helps you create and work on an app in just a few minutes. But learning how to put all the pieces together is hard. How do you validate a form? Or implement a complex multistep user action without writing messy code? How do you test your code? Make it reusable? Wire it to a backend? Keep it easy to understand? The React Cookbook delivers answers fast. Many books teach you how to get started, understand the framework, or use a component library with React, but very few provide examples to help you solve particular problems. This easy-to-use cookbook includes the example code developers need to unravel the most common problems when using React, categorized by topic area and problem. You'll learn how to: Build a single-page application in React using a rich UI Create progressive web applications that users can install and work with offline Integrate with backend services such as REST and GraphQL Automatically test for accessibility problems in your application Secure applications with fingerprints and security tokens using WebAuthn Deal with bugs and avoid common functional and performance problems",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781492085812",
          },
          {
            type: "ISBN_10",
            identifier: "1492085812",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 513,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5_o8EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5_o8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=5_o8EAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=12&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=5_o8EAAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Cookbook.html?hl=&id=5_o8EAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=5_o8EAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "How do you validate a form? Or implement a complex multistep user action without writing messy code? How do you test your code? Make it reusable? Wire it to a backend? Keep it easy to understand? The React Cookbook delivers answers fast.",
      },
    },
    {
      kind: "books#volume",
      id: "uUMQEAAAQBAJ",
      etag: "edmsyeRIn/Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/uUMQEAAAQBAJ",
      volumeInfo: {
        title: "Full-Stack React, TypeScript, and Node",
        subtitle:
          "Build cloud-ready web applications using React 17 with Hooks and GraphQL",
        authors: ["David Choi"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2020-12-18",
        description:
          "Discover the current landscape of full-stack development and how to leverage modern web technologies for building production-ready React.js applications to deploy on AWS Key FeaturesUnderstand the architecture of React and single-page applicationsBuild a modern Web API for your SPA using Node.js, Express, and GraphQLGain a clear and practical understanding of how to build a complete full-stack applicationBook Description React sets the standard for building high-performance client-side web apps. Node.js is a scalable application server that is used in thousands of websites, while GraphQL is becoming the standard way for large websites to provide data and services to their users. Together, these technologies, when reinforced with the capabilities of TypeScript, provide a cutting-edge stack for complete web application development. This book takes a hands-on approach to implementing modern web technologies and the associated methodologies for building full-stack apps. You’ll begin by gaining a strong understanding of TypeScript and how to use it to build high-quality web apps. The chapters that follow delve into client-side development with React using the new Hooks API and Redux. Next, you’ll get to grips with server-side development with Express, including authentication with Redis-based sessions and accessing databases with TypeORM. The book will then show you how to use Apollo GraphQL to build web services for your full-stack app. Later, you’ll learn how to build GraphQL schemas and integrate them with React using Hooks. Finally, you’ll focus on how to deploy your application onto an NGINX server using the AWS cloud. By the end of this book, you’ll be able to build and deploy complete high-performance web applications using React, Node, and GraphQL. What you will learnDiscover TypeScript’s most important features and how they can be used to improve code quality and maintainabilityUnderstand what React Hooks are and how to build React apps using themImplement state management for your React app using ReduxSet up an Express project with TypeScript and GraphQL from scratchBuild a fully functional online forum app using React and GraphQLAdd authentication to your web app using RedisSave and retrieve data from a Postgres database using TypeORMConfigure NGINX on the AWS cloud to deploy and serve your appsWho this book is for The book is for web developers who want to go beyond front-end web development and enter the world of full-stack web development by learning about modern web technologies and how they come together. A good understanding of JavaScript programming is required before getting started with this web development book.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781839214691",
          },
          {
            type: "ISBN_10",
            identifier: "1839214694",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 648,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=uUMQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=uUMQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=uUMQEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=13&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=uUMQEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=uUMQEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=uUMQEAAAQBAJ&rdid=book-uUMQEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=uUMQEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book takes a hands-on approach to implementing modern web technologies and the associated methodologies for building full-stack apps.",
      },
    },
    {
      kind: "books#volume",
      id: "ibejzQEACAAJ",
      etag: "JlNuGolncTE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ibejzQEACAAJ",
      volumeInfo: {
        title: "React Js",
        subtitle: "Modern Web Development Using React Js",
        authors: ["Susan Fitzgerald"],
        publishedDate: "2020-07-13",
        description:
          "React jsFacebook's React has changed the way we think about web applications and user interface development. Due to its design, you can use it beyond web. A feature known as the Virtual DOM enables this.In this chapter we'll go through some of the basic ideas behind the library so you understand React a little better before moving on.What is React?React is a JavaScript library that forces you to think in terms of components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state and where it belongs.Because state management is a difficult problem, a variety of solutions have appeared. In this book, we'll start by managing state ourselves and then push it to a Flux implementation known as Alt. There are also implementations available for several other alternatives, such as Redux, MobX, and Cerebral.React is pragmatic in the sense that it contains a set of escape hatches. If the React model doesn't work for you, it is still possible to revert back to something lower level. For instance, there are hooks that can be used to wrap older logic that relies on the DOM. This breaks the abstraction and ties your code to a specific environment, but sometimes that's the pragmatic thing to do.One of the fundamental problems of programming is how to deal with state. Suppose you are developing a user interface and want to show the same data in multiple places. How do you make sure the data is consistent?Historically we have mixed the concerns of the DOM and state and tried to manage it there. React solves this problem in a different way. It introduced the concept of the Virtual DOM to the masses.Virtual DOM exists on top of the actual DOM, or some other render target. It solves the state manipulation problem in its own way. Whenever changes are made to it, it figures out the best way to batch the changes to the underlying DOM structure. It is able to propagate changes across its virtual tree as in the image above.Virtual DOM PerformanceHandling the DOM manipulation this way can lead to increased performance. Manipulating the DOM by hand tends to be inefficient and is hard to optimize. By leaving the problem of DOM manipulation to a good implementation, you can save a lot of time and effort.React allows you to tune performance further by implementing hooks to adjust the way the virtual tree is updated. Though this is often an optional step.The biggest cost of Virtual DOM is that the implementation makes React quite big. You can expect the bundle sizes of small applications to be around 150-200 kB minified, React included. gzipping will help, but it's still big.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9798665987286",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 162,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ibejzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ibejzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=ibejzQEACAAJ&dq=react&hl=&cd=14&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=ibejzQEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Js.html?hl=&id=ibejzQEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ibejzQEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, we&#39;ll start by managing state ourselves and then push it to a Flux implementation known as Alt.",
      },
    },
    {
      kind: "books#volume",
      id: "MZRRDwAAQBAJ",
      etag: "R2r47OtSY2U",
      selfLink: "https://www.googleapis.com/books/v1/volumes/MZRRDwAAQBAJ",
      volumeInfo: {
        title:
          "React: Cross-Platform Application Development with React Native",
        subtitle: "Build 4 real-world apps with React Native",
        authors: ["Emilio Rodriguez Martinez"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-03-13",
        description:
          "With React Native, you can build native mobile apps that are much more powerful, interactive, and faster by using JavaScript. React Native helps web and mobile developers to build cross-platform apps at a high level. This book takes you through four projects to help understand of the framework and build mobile apps with native user experience.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789139600",
          },
          {
            type: "ISBN_10",
            identifier: "1789139600",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 183,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=MZRRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=MZRRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=MZRRDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=15&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=MZRRDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=MZRRDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 722.15,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 361.08,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=MZRRDwAAQBAJ&rdid=book-MZRRDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 722150000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 361080000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=MZRRDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "React Native helps web and mobile developers to build cross-platform apps at a high level. This book takes you through four projects to help understand of the framework and build mobile apps with native user experience.",
      },
    },
    {
      kind: "books#volume",
      id: "0DidDwAAQBAJ",
      etag: "u6cnbxay/vs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/0DidDwAAQBAJ",
      volumeInfo: {
        title: "React Native for Mobile Development",
        subtitle:
          "Harness the Power of React Native to Create Stunning iOS and Android Applications",
        authors: ["Akshat Paul", "Abhishek Nalwaya"],
        publisher: "Apress",
        publishedDate: "2019-06-12",
        description:
          "Develop native iOS and Android apps with ease using React Native. Learn by doing through an example-driven approach, and have a substantial running app at the end of each chapter. This second edition is fully updated to include ES7 (ECMAScript 7), the latest version of React Native (including Redux), and development on Android. You will start by setting up React Native and exploring the anatomy of React Native apps. You'll then move on to Redux data flow, how it differs from flux, and how you can include it in your React Native project to solve state management differently and efficiently. You will also learn how to boost your development by including popular packages developed by the React Native community that will help you write less; do more. Finally, you'll learn to how write test cases using Jest and submit your application to the App Store. React Native challenges the status quo of native iOS and Android development with revolutionary components, asynchronous execution, unique methods for touch handling, and much more. This book reveals the the path-breaking concepts of React.js and acquaints you with the React way of thinking so you can learn to create stunning user interfaces. What You'll Learn Build stunning iOS and Android applications Understand the Redux design pattern and use it in your project Interact with iOS and android device capabilities such as addressbook, camera, GPS and more with your apps Test and launch your application to the App StoreWho This Book Is For Anyone with JavaScript experience who wants to build native mobile applications but dreads the thought of programming in Objective-C or Java. Developers who have experience with JavaScript but are new or not acquainted to React Native or ReactJS.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781484244548",
          },
          {
            type: "ISBN_10",
            identifier: "1484244540",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 243,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=0DidDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=0DidDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=0DidDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=16&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=0DidDwAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Native_for_Mobile_Development.html?hl=&id=0DidDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_Native_for_Mobile_Development-sample-epub.acsm?id=0DidDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_Native_for_Mobile_Development-sample-pdf.acsm?id=0DidDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=0DidDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book reveals the the path-breaking concepts of React.js and acquaints you with the React way of thinking so you can learn to create stunning user interfaces.",
      },
    },
    {
      kind: "books#volume",
      id: "7KVYDwAAQBAJ",
      etag: "vBA9R1PV84s",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7KVYDwAAQBAJ",
      volumeInfo: {
        title: "Learning React",
        subtitle:
          "A Hands-On Guide to Building Web Applications Using React and Redux",
        authors: ["Kirupa Chinnathambi"],
        publisher: "Addison-Wesley Professional",
        publishedDate: "2018-04-26",
        description:
          "Learning React A hands-on guide to building web applications using React and Redux As far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier. What React isn’t, though, is beginner-friendly and approachable. Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help web developers new to React understand its fundamentals and how to use it to build really performant (and awesome) apps. The only book on the market that helps you get your first React app up and running in just minutes, Learning Reactis chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show you how to apply what you learn. Build your first React app Create components to define parts of your UI Combine components into other components to build more complex UIs Use JSX to specify visuals without writing full-fledged JavaScript Deal with maintaining state Work with React’s way of styling content Make sense of the mysterious component lifecycle Build multi-page apps using routing and views Optimize your React workflow using tools such as Node, Babel, webpack, and others Use Redux to make managing your app data and state easy Contents at a Glance 1 Introducing React 2 Building Your First React App 3 Components in React 4 Styling in React 5 Creating Complex Components 6 Transferring Properties 7 Meet JSX... Again! 8 Dealing with State in React 9 Going from Data to UI in React 10 Events in React 11 The Component Lifecycle 12 Accessing DOM Elements in React 13 Setting Up Your React Dev Environment 14 Working with External Data in React 15 Building an Awesome Todo List App in React 16 Creating a Sliding Menu in React 17 Avoiding Unnecessary Renders in React 18 Creating a Single-Page App in React Using React Router 19 Introduction to Redux 20 Using Redux with React",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780134843575",
          },
          {
            type: "ISBN_10",
            identifier: "0134843576",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 747,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.7.7.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7KVYDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7KVYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=7KVYDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=17&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=7KVYDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=7KVYDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2499.24,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2499.24,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=7KVYDwAAQBAJ&rdid=book-7KVYDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2499240000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2499240000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-epub.acsm?id=7KVYDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-pdf.acsm?id=7KVYDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=7KVYDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The only book on the market that helps you get your first React app up and running in just minutes, Learning Reactis chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show ...",
      },
    },
    {
      kind: "books#volume",
      id: "_TgzEAAAQBAJ",
      etag: "0BHFVmamrNo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/_TgzEAAAQBAJ",
      volumeInfo: {
        title: "React Quickly",
        subtitle: "Painless web apps with React, JSX, Redux, and GraphQL",
        authors: ["Azat Mardan"],
        publisher: "Simon and Schuster",
        publishedDate: "2017-08-20",
        description:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology Successful user interfaces need to be visually interesting, fast, and flowing. The React.js JavaScript library supercharges view-heavy web applications by improving data flow between UI components. React sites update visual elements efficiently and smoothly, minimizing page reloads. React is developer friendly, with a strong ecosystem to support the dev process along the full application stack. And because it's all JavaScript, React is instantly familiar. About the Book React Quickly is the tutorial for web developers who want to get started fast with React.js. Following carefully chosen and clearly explained examples, you'll learn React development using your existing JavaScript and web dev skills. You'll explore a host of different projects as you learn about web components, forms, and data. What's Inside Master React fundamentals Build full web apps with data and routing Test components Optimize React apps About the Reader This book is for developers comfortable building web applications with JavaScript. About the Author Azat Mardan is a Tech Fellow at Capital One with extensive experience using and teaching JavaScript and Node, and author of several books on JavaScript, Node, React, and Express. Table of Contens PART 1 - REACT FOUNDATION Meeting React Baby steps with React Introduction to JSX Making React interactive with states React component lifecycle events Handling events in React Working with forms in React Scaling React components Project: Menu component Project: Tooltip component Project: Timer component PART 2 - REACT ARCHITECTURE The Webpack build tool React routing Working with data using Redux Working with data using GraphQL Unit testing React with Jest React on Node and Universal JavaScript Project: Building a bookstore with React Router Project: Checking passwords with Jest Project: Implementing autocomplete with Jest, Express, and MongoDB APPENDIXES Appendix A - Installing applications used in this book Appendix B - React cheatsheet Appendix C - Express.js cheatsheet Appendix D - MongoDB and Mongoose cheatsheet Appendix E - ES6 for success",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781638353966",
          },
          {
            type: "ISBN_10",
            identifier: "1638353964",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 794,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=_TgzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=_TgzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=_TgzEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=18&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=_TgzEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=_TgzEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2624.32,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2624.32,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=_TgzEAAAQBAJ&rdid=book-_TgzEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2624320000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2624320000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_Quickly-sample-epub.acsm?id=_TgzEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=_TgzEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.",
      },
    },
    {
      kind: "books#volume",
      id: "A1fjDwAAQBAJ",
      etag: "ptdaoVVRszQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/A1fjDwAAQBAJ",
      volumeInfo: {
        title: "Essentials of Javascript",
        subtitle: "All about React Native",
        authors: ["Shaaran Lakshminarayanan"],
        publisher: "Shaaran Lakshminarayanan",
        publishedDate: "2020-05-12",
        description:
          "Do you want to make applications for Android and iOS ? Are you a developer who is bored of writing code for both Android and iOS ? In this series of books we will overcome the problem of having to write code for Android and iOS by using React Native. React Native is a framework developed by Facebook for creating native-style apps for iOS & Android under one common language, JavaScript. Initially, Facebook only developed React Native to support iOS. However with its recent support of the Android operating system, the library can now render mobile UIs for both platforms. Why React Native ? Not only react native allows you to create cross platform applications but react native also makes updating apps simple through over-the-app updates. Over the air update in react native is achieved through technologies such as CodePush with a few lines of code. Armed with React Native you’ll finally be able to make apps of your choice in no time and I’m glad to show you what React Native can do through this series of books. In this book we will learn the core concepts of Javascript to help us with our React Native Journey.",
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 27,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.0.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=A1fjDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=A1fjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=A1fjDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=19&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=A1fjDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=A1fjDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 0,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 0,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=A1fjDwAAQBAJ&rdid=book-A1fjDwAAQBAJ&rdot=1&source=gbs_api",
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=A1fjDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book we will learn the core concepts of Javascript to help us with our React Native Journey.",
      },
    },
    {
      kind: "books#volume",
      id: "e_l9zQEACAAJ",
      etag: "dpNhtanxpaY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/e_l9zQEACAAJ",
      volumeInfo: {
        title: "React and React Native",
        subtitle:
          "A Complete Hands-on Guide to Modern Web and Mobile Development with React.js",
        authors: ["Adam Boduch", "Roy Derks"],
        publishedDate: "2020-04-29",
        description:
          "Discover and learn how to use React and React Native to build mobile, desktop and web apps. From composable and Native UIs through to device-specific APIs and offline development, this book has everything you need to create engaging and user-friendly React applications which run on all major platforms.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1839211148",
          },
          {
            type: "ISBN_13",
            identifier: "9781839211140",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 526,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=e_l9zQEACAAJ&dq=react&hl=&cd=20&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=e_l9zQEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_and_React_Native.html?hl=&id=e_l9zQEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=e_l9zQEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "From composable and Native UIs through to device-specific APIs and offline development, this book has everything you need to create engaging and user-friendly React applications which run on all major platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "KOXPEAAAQBAJ",
      etag: "QWBzGjPbmcM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/KOXPEAAAQBAJ",
      volumeInfo: {
        title: "React Quickly, Second Edition",
        authors: ["Morten Barklund", "Azat Mardan"],
        publisher: "Simon and Schuster",
        publishedDate: "2023-09-05",
        description:
          "Learn the skills you need to build React applications quickly! This fully revised second edition introduces functional components, React hooks, static site generators, and more. In React Quickly, Second Edition you will learn how to: Master React fundamentals Implement best practices and the components of good architecture Build intuitive user interfaces Create dynamic components with JSX Use lightweight functional components in React Make your app interactive with stateful components Utilize React hooks Handle events like button clicks and pass data between components Build your skills with React fast! There’s no slow theory and tedious history in React Quickly—you’ll dive into React code right from the very first chapter. As you go, you’ll explore over 80 useful and practical examples that put React into action. This new second edition has been completely rewritten to cover the latest developments in the React framework. Perfect, whether you’re a React beginner or an experienced pro looking to keep their skills up to date. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the technology React makes it a breeze to build beautiful, reliable web frontends. This amazing JavaScript library has a modular architecture, so you can create, combine, and test components seamlessly. React is perfect for small prototypes, enterprise scale sites, and everything in between. About the book React Quickly, Second Edition offers a unique approach to learning the React framework. More than 80 concise examples guide you from your first steps through advanced applications. You’ll appreciate the up-to-date coverage of functional components, React hooks, and web accessibility, along with interesting projects to practice your new skill. What's inside Master React fundamentals Best practices of component-based design Create dynamic components with JSX Make your app interactive with stateful components About the reader For developers comfortable building web applications with JavaScript. About the author Morten Barklund is an expert in React, web testing, and accessibility and is the founder of Coding Heaven. Azat Mardan is a seasoned software engineer, startup mentor, and best-selling author. Table of Contents 1 Meeting React 2 Baby steps with React 3 Introduction to JSX 4 Functional Components 5 Making React interactive with states 6 Effects and the React component life cycle 7 Hooks to fuel your web applications 8 Handling events in React 9 Working with forms in React 10 Advanced React hooks for scaling 11 Project: Website menu 12 Project: Timer 13 Project: Task manager",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781633439290",
          },
          {
            type: "ISBN_10",
            identifier: "1633439291",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 454,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=KOXPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=KOXPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=KOXPEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=21&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=KOXPEAAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Quickly_Second_Edition.html?hl=&id=KOXPEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=KOXPEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "React is perfect for small prototypes, enterprise scale sites, and everything in between. About the book React Quickly, Second Edition offers a unique approach to learning the React framework.",
      },
    },
    {
      kind: "books#volume",
      id: "-dzJDAAAQBAJ",
      etag: "B9srSurQY6E",
      selfLink: "https://www.googleapis.com/books/v1/volumes/-dzJDAAAQBAJ",
      volumeInfo: {
        title: "Getting Started with React",
        authors: ["Doel Sengupta", "Manu Singhal", "Danillo Corvalan"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2016-04-29",
        description:
          "A light but powerful way to build dynamic real-time applications using ReactJS About This Book Learn how to develop powerful JavaScript applications using ReactJS Integrate a React-based app with an external API (Facebook login) while using React components, with the Facebook developer app Implement the Reactive paradigm to build stateless and asynchronous apps with React Who This Book Is For This book is for any front-end web or mobile-app developer who wants to learn ReactJS. Knowledge of basic JavaScript will give you a good head start with the book. What You Will Learn Understand the ReactJS basics through an overview Install and create your first React component Refactor the ReactJS component using JSX Integrate your React application with the Facebook login and Graph API, then fetch data from your liked pages in Facebook and display them in a browser Handle UI elements events with React, respond to users input, and create stateful components Use some core lifecycle events for integration and find out about ES6 syntaxes in the React world Understand the FLUX architecture and create an application using FLUX with React Make a component more reusable with mixins and validation helpers and structure your components properly Explore techniques to test your ReactJS code Deploy your code using webpack and Gulp In Detail ReactJS, popularly known as the V (view) of the MVC architecture, was developed by the Facebook and Instagram developers. It follows a unidirectional data flow, virtual DOM, and DOM difference that are generously leveraged in order to increase the performance of the UI. Getting Started with React will help you implement the Reactive paradigm to build stateless and asynchronous apps with React. We will begin with an overview of ReactJS and its evolution over the years, followed by building a simple React component. We will then build the same react component with JSX syntax to demystify its usage. You will see how to configure the Facebook Graph API, get your likes list, and render it using React. Following this, we will break the UI into components and you'll learn how to establish communication between them and respond to users input/events in order to have the UI reflect their state. You'll also get to grips with the ES6 syntaxes. Moving ahead, we will delve into the FLUX and its architecture, which is used to build client-side web applications and complements React's composable view components by utilizing a unidirectional data flow. Towards the end, you'll find out how to make your components reusable, and test and deploy them into a production environment. Finally, we'll briefly touch on other topics such as React on the server side, Redux and some advanced concepts. Style and approach The book follows a step-by-step, practical, tutorial approach with examples that explain the key concepts of ReactJS. Each topic is sequentially explained and contextually placed to give sufficient details of ReactJS.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781785284106",
          },
          {
            type: "ISBN_10",
            identifier: "178528410X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 212,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=-dzJDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=-dzJDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=-dzJDAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=22&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=-dzJDAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=-dzJDAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=-dzJDAAAQBAJ&rdid=book--dzJDAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=-dzJDAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A light but powerful way to build dynamic real-time applications using ReactJS About This Book Learn how to develop powerful JavaScript applications using ReactJS Integrate a React-based app with an external API (Facebook login) while using ...",
      },
    },
    {
      kind: "books#volume",
      id: "0bpIEAAAQBAJ",
      etag: "lt24/ig40iQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/0bpIEAAAQBAJ",
      volumeInfo: {
        title: "Advanced Web Development with React",
        authors: ["Mohan Mehul"],
        publisher: "BPB Publications",
        publishedDate: "2020-02-26",
        description:
          "Level up your React and Next.js skills with advanced concepts about SSR and PWA Key Featuresa- Covers latest and core React concepts including React hooks and React reconcilera- Covers about Server Side Rendering with React and how to use it using Next.jsa- Covers about Progressive Web Apps in React and how to create thema- Covers intermediate and advanced React concepts like state managementa- Covers overview of React for beginners to catch with advanced concepts latera- Covers bleeding-edge React concepts on the future of React and how it would work eventuallyDescriptionThe book starts by introducing the reader to React, what it is and why you need a library like React to work with medium to large scale applications. We then move on to implementing simple client-side programs with React, uncovering modern React practices like React hooks and diving deep into various kinds of hooks. We then move to implement React on the server using Server-Side Rendering to bring benefits of the SEO world to the dynamic rendering nature of front-end libraries. For this, we use Next.js, a very popular implementation of Server-Side Rendering which comes with tons of good practices already baked in. We also take a look at how Progressive Web Apps can be created out of existing React codebases and what benefits it provides us. Finally, we end the book with some React internals (how to React works) and some bleeding-edge features in React which are expected to roll out in 2-3 years fully and would impact how to React works under the hood.What will you learna- What React is and how to get started with ita- Modern ways to code React applicationsa- Implementing Server-Side rendering with/without Next.js on the top of React librarya- Working with Progressive Web Apps in Reacta- How to React works under the hooda- Future of React and bleeding-edge React tech you can use todayWho this book is forThe reader is expected to have a decent understanding of JavaScript/HTML/CSS, and possibly, worked with React a little bit beforehand. Although the first 2 chapters cover basics of React, still it is recommended for users with at least a bit of knowledge and experience with React.Table of Contents1. React 1012. Setting up React3. Components4. State Management with React5. Server Side React6. Introduction to Next.js7. More with Next.js8. Progressive Web Apps9. Bleeding edge ReactAbout the AuthorMehul Mohan is an entrepreneur, developer and a security researcher. Currently, he is pursuing his bachelor's degree in CSE at BITS Pilani. He is a WWDC'19 Scholar, and runs codedamn - a platform for people to learn coding. You'll often find him creating programming tutorials on his YouTube channel, codedamn, having over 100,000 subscribers. He has been acknowledged by companies such as Google, Microsoft, Sony, etc. for his contributions as a security researcher. Your Blog links: https://codedamn.com https://mehulmohan.com His LinkedIn Profile: https://linkedin.com/in/mehulmpt",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9789389423600",
          },
          {
            type: "ISBN_10",
            identifier: "9389423600",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 184,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=0bpIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=0bpIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=0bpIEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=23&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=0bpIEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=0bpIEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 976.33,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 488.16,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=0bpIEAAAQBAJ&rdid=book-0bpIEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 976330000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 488160000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Advanced_Web_Development_with_React-sample-epub.acsm?id=0bpIEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Advanced_Web_Development_with_React-sample-pdf.acsm?id=0bpIEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=0bpIEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Finally, we end the book with some React internals (how to React works) and some bleeding-edge features in React which are expected to roll out in 2-3 years fully and would impact how to React works under the hood.What will you learna- What ...",
      },
    },
    {
      kind: "books#volume",
      id: "J89cEAAAQBAJ",
      etag: "f9ZCduZyT3Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/J89cEAAAQBAJ",
      volumeInfo: {
        title:
          "Beginning ReactJS Foundations Building User Interfaces with ReactJS",
        subtitle: "An Approachable Guide",
        authors: ["Chris Minnick"],
        publisher: "John Wiley & Sons",
        publishedDate: "2022-02-03",
        description:
          "Quickly learn the most widely used front-end development language with ease and confidence React JS Foundations: Building User Interfaces with ReactJS - An Approachable Guide walks readers through the fundamental concepts of programming with the explosively popular front-end tool known as React JS. Written by an accomplished full-stack engineer, speaker, and community organizer, React JS Foundations teaches readers how to understand React and how to begin building applications with it. The book: Explains and clarifies technical terminology with relevant and modern examples to assist people new to programming understand the language Helps experienced programmers quickly get up to speed with React Is stocked throughout with practical and applicable examples of day-to-day React work Perfect for beginner, intermediate, and advanced programmers alike, React JS Foundations will quickly bring you up to speed on one of the most useful and widely used front-end languages on the web today. You can start building your first application today.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781119685586",
          },
          {
            type: "ISBN_10",
            identifier: "1119685583",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 726,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=J89cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=J89cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=J89cEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=24&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=J89cEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=J89cEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 4897,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 4897,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=J89cEAAAQBAJ&rdid=book-J89cEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 4897000000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 4897000000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Beginning_ReactJS_Foundations_Building_U-sample-epub.acsm?id=J89cEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Beginning_ReactJS_Foundations_Building_U-sample-pdf.acsm?id=J89cEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=J89cEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This handy guide includes: Guides to understanding the JavaScript features used by React A step-by-step tutorial in writing your first React application How to write JSX code How to write class and function components How to use advanced ...",
      },
    },
    {
      kind: "books#volume",
      id: "4rltEAAAQBAJ",
      etag: "107ny/Pa3r8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/4rltEAAAQBAJ",
      volumeInfo: {
        title: "React Projects",
        subtitle:
          "Build advanced cross-platform projects with React and React Native to become a professional developer",
        authors: ["Roy Derks"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2022-04-29",
        description:
          "Learn how to develop real-world applications of varying complexity for the web, mobile, and VR devices using React, React Native, React 360, and more Key Features • Build React applications at scale using React patterns and best practices • Explore React features such as Hooks, the Context API, and the Suspense API • Extend React's integration with React Native for building cross-platform mobile apps and games Book Description Developed by Facebook, React is a popular library for building impressive user interfaces. React extends its capabilities to mobile platforms using the React Native framework and integrates with popular web and mobile tools to build scalable applications. React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools, such as GraphQL, Expo, and React 360. You'll start building a real-world project right from the first chapter and get hands-on with developing scalable applications as you advance to building more complex projects. Throughout the book, you'll use the latest versions of React and React Native to explore features such as routing, Context, and Hooks on multiple platforms, which will help you build full-stack web and mobile applications efficiently. Finally, you'll get to grips with unit testing with Jest and end-to-end testing with Cypress to build test-driven apps. By the end of this React book, you'll have developed the skills necessary to start building scalable React apps across web and mobile platforms. What you will learn • Create a wide range of applications using various modern React tools and frameworks • Discover how React Hooks modernize state management for React apps • Develop web applications using styled and reusable React components • Build test-driven React applications using Jest, React Testing Library, and Cypress • Understand full-stack development using GraphQL, Apollo, and React • Perform server-side rendering using React and Next.js • Create animated games using React Native and Expo • Design gestures and animations for a cross-platform game using React Native Who this book is for The book is for JavaScript developers who want to explore React tooling and frameworks for building cross-platform applications. Basic knowledge of web development, ECMAScript, and React will assist with understanding key concepts covered in this book. Table of Contents • Creating a Single-Page Application in React • Creating a Portfolio in React with Reusable Components and Routing • Building a Dynamic Project Management Board • Building a Server-Side-Rendered Community Feed Using Next.js • Build a Personal Shopping List Application Using Context and Hooks • Building an Application Exploring TDD Using the React Testing Library and Cypress • Building a Full-Stack E-Commerce Application with Next.js and GraphQL • Building an Animated Game Using React Native and Expo • Building a Full-Stack Social Media Application with React Native and Expo • Creating a Virtual Reality Application with React and Three.js",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781801078115",
          },
          {
            type: "ISBN_10",
            identifier: "1801078114",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 384,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=4rltEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=4rltEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=4rltEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=25&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=4rltEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=4rltEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=4rltEAAAQBAJ&rdid=book-4rltEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=4rltEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "By the end of this React book, you&#39;ll have developed the skills necessary to start building scalable React apps across web and mobile platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "dczDEAAAQBAJ",
      etag: "P/kiX4+51ag",
      selfLink: "https://www.googleapis.com/books/v1/volumes/dczDEAAAQBAJ",
      volumeInfo: {
        title: "Your First Week With React",
        authors: [
          "Maria Antonietta Perna",
          "Pavels Jelisejevs",
          "Michael Wanyoike",
          "Chris Laughlin",
          "Eric Greene",
          "Mark Brown",
          "Camilo Reyes",
        ],
        publisher: "SitePoint Pty Ltd",
        publishedDate: "2017-11-07",
        description:
          "React is a remarkable JavaScript library that' taken the development community by storm. In a nutshell, it's made it easier for developers to build interactive user interfaces for web, mobile and desktop platforms. One of its best features is its freedom from the problematic bugs inherent in MVC frameworks, where inconsistent views is a recurring problem for big projects. Today, thousands of companies worldwide are using React, including big names such as Netflix and AirBnB. React has become immensely popular, such that a number of apps have been ported to React -- including WhatsApp, Instagram and Dropbox. This book is a collection of tutorials, selected from SitePoint's React Hub, that will guide you through your first days with the amazingly flexible library.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781492065302",
          },
          {
            type: "ISBN_10",
            identifier: "1492065307",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 96,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=dczDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=dczDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=dczDEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=26&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=dczDEAAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Your_First_Week_With_React.html?hl=&id=dczDEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Your_First_Week_With_React-sample-epub.acsm?id=dczDEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Your_First_Week_With_React-sample-pdf.acsm?id=dczDEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=dczDEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book is a collection of tutorials, selected from SitePoint&#39;s React Hub, that will guide you through your first days with the amazingly flexible library.",
      },
    },
    {
      kind: "books#volume",
      id: "vHj7swEACAAJ",
      etag: "+ukauqYUQO8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/vHj7swEACAAJ",
      volumeInfo: {
        title: "React",
        subtitle:
          "Quickstart Step-by-step Guide to Learning React Javascript Library (React.js, Reactjs, Learning React Js, React Javascript, React Programming)",
        authors: ["Lionel Lopez"],
        publisher: "Createspace Independent Publishing Platform",
        publishedDate: "2017-09-07",
        description:
          "REACT This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming. This book is based on 17 chapters well managed and it will helps you to become a React JS expert in less than 7 days. Each chapter will contain a certain number of relevant topics with illustrations and exercises where necessary, this will all be finished off with an end of chapter quiz for an easy and enjoyable learning. Benefits of reading this book that you're not going to find anywhere else: It helps you to understand React Easily. You can learn how to install Node JS based on ReactJS. With React you can build applications fast. ReactJS is SEO friendly. It makes code writing simple. We can use React with other libraries. React JS is very light weight front-end framework which allows developers to create web applications faster. Great Community Support. Supports State Management using Redux. CLICK ADD TO CART TO GET THIS AMAZING BOOK!",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1976210232",
          },
          {
            type: "ISBN_13",
            identifier: "9781976210235",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 206,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=vHj7swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=vHj7swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=vHj7swEACAAJ&dq=react&hl=&cd=27&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=vHj7swEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React.html?hl=&id=vHj7swEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=vHj7swEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "REACT This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming. This book is based on 17 chapters well managed and it will helps you to become a React JS expert in less than 7 days.",
      },
    },
    {
      kind: "books#volume",
      id: "Rt18DwAAQBAJ",
      etag: "j7VSmSd4phQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Rt18DwAAQBAJ",
      volumeInfo: {
        title: "Learn React with TypeScript 3",
        subtitle:
          "Beginner's guide to modern React web development with TypeScript 3",
        authors: ["Carl Rippon"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-11-29",
        description:
          "Start developing modern day component based web apps using React 16, Redux and TypeScript 3 with this easy to follow guide filled with practical examples. Key FeaturesLearn the latest and core features of React such as components, React Router, and suspenseDive into TypeScript 3 and it`s core components such as interfaces, types aliases, tuples, generics and much more.Build small-to-large scale single page applications with React, Redux, GraphQL and TypeScriptBook Description React today is one of the most preferred choices for frontend development. Using React with TypeScript enhances development experience and offers a powerful combination to develop high performing web apps. In this book, you’ll learn how to create well structured and reusable react components that are easy to read and maintain by leveraging modern web development techniques. We will start with learning core TypeScript programming concepts before moving on to building reusable React components. You'll learn how to ensure all your components are type-safe by leveraging TypeScript's capabilities, including the latest on Project references, Tuples in rest parameters, and much more. You'll then be introduced to core features of React such as React Router, managing state with Redux and applying logic in lifecycle methods. Further on, you'll discover the latest features of React such as hooks and suspense which will enable you to create powerful function-based components. You'll get to grips with GraphQL web API using Apollo client to make your app more interactive. Finally, you'll learn how to write robust unit tests for React components using Jest. By the end of the book, you'll be well versed with all you need to develop fully featured web apps with React and TypeScript. What you will learnGain a first-hand experience of TypeScript and its productivity features Transpile your TypeScript code into JavaScript for it to run in a browser Learn relevant advanced types in TypeScript for creating strongly typed and reusable components.Create stateful function-based components that handle lifecycle events using hooks Get to know what GraphQL is and how to work with it by executing basic queries to get familiar with the syntaxBecome confident in getting good unit testing coverage on your components using JestWho this book is for The ideal target audience for this book are web developers who want to get started with creating modern day web apps with React and TypeScript.You are expected to have a basic understanding of JavaScript and HTML programming. No prior knowledge of TypeScript and React is needed.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789618129",
          },
          {
            type: "ISBN_10",
            identifier: "1789618126",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 492,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Rt18DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Rt18DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Rt18DwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=28&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Rt18DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Rt18DwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Rt18DwAAQBAJ&rdid=book-Rt18DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Rt18DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, you’ll learn how to create well structured and reusable react components that are easy to read and maintain by leveraging modern web development techniques.",
      },
    },
    {
      kind: "books#volume",
      id: "cWdmDwAAQBAJ",
      etag: "lHkyNE/D8Xs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/cWdmDwAAQBAJ",
      volumeInfo: {
        title: "Beginning React",
        subtitle:
          "Simplify your frontend development workflow and enhance the user experience of your applications with React",
        authors: ["Andrea Chiarelli"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-07-25",
        description:
          "Take your web applications to a whole new level with efficient, component-based UIs that deliver cutting-edge interactivity and performance. Key Features Elaborately explains basics before introducing advanced topics Explains creating and managing the state of components across applications Implement over 15 practical activities and exercises across 11 topics to reinforce your learning Book Description Projects like Angular and React are rapidly changing how development teams build and deploy web applications to production. In this book, you’ll learn the basics you need to get up and running with React and tackle real-world projects and challenges. It includes helpful guidance on how to consider key user requirements within the development process, and also shows you how to work with advanced concepts such as state management, data-binding, routing, and the popular component markup that is JSX. As you complete the included examples, you’ll find yourself well-equipped to move onto a real-world personal or professional frontend project. What you will learn Understand how React works within a wider application stack Analyze how you can break down a standard interface into specific components Successfully create your own increasingly complex React components with HTML or JSX Correctly handle multiple user events and their impact on overall application state Understand the component lifecycle to optimize the UX of your application Configure routing to allow effortless, intuitive navigation through your components Who this book is for If you are a frontend developer who wants to create truly reactive user interfaces in JavaScript, then this is the book for you. For React, you’ll need a solid foundation in the essentials of the JavaScript language, including new OOP features that were introduced in ES2015. An understanding of HTML and CSS is assumed, and a basic knowledge of Node.js will be useful in the context of managing a development workflow, but is not essential.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789534924",
          },
          {
            type: "ISBN_10",
            identifier: "1789534925",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 90,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=cWdmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=cWdmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=cWdmDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=29&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=cWdmDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=cWdmDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 1229.55,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 614.78,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=cWdmDwAAQBAJ&rdid=book-cWdmDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1229550000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 614780000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=cWdmDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, you’ll learn the basics you need to get up and running with React and tackle real-world projects and challenges.",
      },
    },
    {
      kind: "books#volume",
      id: "s9eyEAAAQBAJ",
      etag: "WetOAJv9Mdw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/s9eyEAAAQBAJ",
      volumeInfo: {
        title: "React JavaScript Notes For Professionals",
        authors: ["Dr. Ashad ullah Qureshi"],
        publisher: "Concepts Books Publication",
        publishedDate: "2023-03-01",
        description:
          "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9798386385798",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 110,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=s9eyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=s9eyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=s9eyEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=30&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=s9eyEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=s9eyEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 293.82,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 205.67,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=s9eyEAAAQBAJ&rdid=book-s9eyEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 293820000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 205670000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_JavaScript_Notes_For_Professionals-sample-pdf.acsm?id=s9eyEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=s9eyEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      },
    },
    {
      kind: "books#volume",
      id: "Fs6KDwAAQBAJ",
      etag: "CiVReqO5WRk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Fs6KDwAAQBAJ",
      volumeInfo: {
        title: "Create React App 2 Quick Start Guide",
        subtitle: "Build React applications faster with Create React App",
        authors: ["Brandon Richey"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-02-27",
        description:
          "Integrate your React applications with React to build efficient web services. Key FeaturesLearn React by building applications with Create React AppCreate interactive UIs exploring the latest feature of CRA 2.0Build Progressive Web Applications for a more seamless webBook Description If you're a power user and you aren’t happy always reusing default configurations, from previous applications with each new application, then all you need is Create React App (CRA), a tool in the React ecosystem designed to help you create boilerplate code for building a web frontend. This book will help you use CRA to write React programs without significant configuration-related difficulties. With this quick start guide, you will integrate your applications with React to build efficient professional web services.You will learn to design UIs with the features of CRA and template your React applications. By the end of the book, you will be sufficiently skilled to be able to build faster and effective React apps using CRA. What you will learnBecome familiar with React by building applications with Create React AppMake your frontend development hassle freeCreate interactive UIs exploring the latest features of CRA 2Build modern, React projects with, SASS,and progressive web applicationsDevelop proxy backend servers and simulate interaction with a full backendKeep your application fully tested and maintain confidence in your projectWho this book is for The book is intended for the web developers who want to jump into building great frontend with React using easy templating solutions.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789955668",
          },
          {
            type: "ISBN_10",
            identifier: "1789955661",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 182,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Fs6KDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Fs6KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Fs6KDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=31&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Fs6KDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Fs6KDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2020.15,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2020.15,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Fs6KDwAAQBAJ&rdid=book-Fs6KDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2020150000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2020150000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Fs6KDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book will help you use CRA to write React programs without significant configuration-related difficulties.",
      },
    },
    {
      kind: "books#volume",
      id: "oIx5DwAAQBAJ",
      etag: "o5fNReUnqng",
      selfLink: "https://www.googleapis.com/books/v1/volumes/oIx5DwAAQBAJ",
      volumeInfo: {
        title: "Practical React Native",
        subtitle:
          "Build Two Full Projects and One Full Game using React Native",
        authors: ["Frank Zammetti"],
        publisher: "Apress",
        publishedDate: "2018-11-12",
        description:
          "Discover how to use React Native in the real world, from scratch. This book shows you what React Native has to offer, where it came from, and where it’s going. You'll begin with a solid foundation of practical knowledge, and then build on it immediately by constructing three different apps. You'll learn how to use each feature of React Native by working on two full projects and one full game. These aren’t just simple React Native Hello World examples (although you’ll naturally start there!) but are apps that you can, if you so choose, install on your mobile devices and use for real. Throughout this book, you'll gain real-world familiarity with React Native as well as supporting components from Expo, NativeBase, React Navigation and the Redux and Lodash libraries. You'll also build server-side code for a mobile React Native app to talk to using the popular Node.js and Socket.io library, providing you a holistic view of things even beyond React Native. And, you'll see many helpful tips, tricks and gotchas to watch out for along the way! Practical React Native offers practical exercises that will give you a solid grasp of building apps with React Native, allowing you to springboard into creating more advanced apps on your own.Creating a game with React Native will allow you to see a whole other perspective on what React Native can do. What You'll Learn Master the basics of React Native Create a logically structured project Review interface elements, such as widgets, controls, and extensions Build layouts Work with Expo, an open source toolchain Who This book Is For The primary audience is mobile developers and anyone looking to build for multiple mobile platforms and trying to do so with a codebase that is largely the same across all. Readers will need a decent foundation, but not necessarily be experts in, HTML, CSS, and JavaScript, but I'll assume little beyond that.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781484239391",
          },
          {
            type: "ISBN_10",
            identifier: "1484239393",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 342,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=oIx5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=oIx5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=oIx5DwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=32&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=oIx5DwAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Practical_React_Native.html?hl=&id=oIx5DwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Practical_React_Native-sample-epub.acsm?id=oIx5DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Practical_React_Native-sample-pdf.acsm?id=oIx5DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=oIx5DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Discover how to use React Native in the real world, from scratch. This book shows you what React Native has to offer, where it came from, and where it’s going.",
      },
    },
    {
      kind: "books#volume",
      id: "kc6PDwAAQBAJ",
      etag: "FVixZX69PwA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/kc6PDwAAQBAJ",
      volumeInfo: {
        title: "React Design Patterns and Best Practices",
        subtitle:
          "Design, build and deploy production-ready web applications using standard industry practices, 2nd Edition",
        authors: ["Carlos Santana Roldán"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-03-30",
        description:
          "We will be taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that’s for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789534566",
          },
          {
            type: "ISBN_10",
            identifier: "1789534569",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 338,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=kc6PDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=kc6PDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=kc6PDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=33&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=kc6PDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=kc6PDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 827.17,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 413.58,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=kc6PDwAAQBAJ&rdid=book-kc6PDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 827170000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 413580000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=kc6PDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "We will be taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that’s for new or already existing projects.",
      },
    },
    {
      kind: "books#volume",
      id: "Tg9QDwAAQBAJ",
      etag: "3W62faWQs6U",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Tg9QDwAAQBAJ",
      volumeInfo: {
        title: "React for Real",
        subtitle: "Front-End Code, Untangled",
        authors: ["Ludovico Fischer"],
        publisher: "Pragmatic Bookshelf",
        publishedDate: "2017-09-06",
        description:
          "When traditional web development techniques don't cut it, try React. Use React to create highly interactive web pages faster and with fewer errors. With a little JavaScript experience under your belt, you'll be up and running in no time creating dynamic web applications. Craft isolated components that make your apps easier to develop and maintain, with plenty of guidance on best practices. Set up automated tests, and make pages render fast for your users. See how to use your React skills to integrate with other front-end technologies when needed. Dive right into React by defining components, the basic building blocks of a React application. Integrate modern JavaScript language features such as classes and arrow functions in your app. Analyze the relationships in your data to isolate state, and sync the data model with what your users see. Once you're familiar with how a React application works, organize your code base with modules. Configure a production build and deliver your app as efficiently as possible with Webpack. Master testing with React-specific advice and tools to catch the most bugs with the least amount of code. Learn the basics of the Redux library. Define actions and manage an immutable central state with reducers, then connect Redux to your React components to build even larger and more complex interfaces. Package your React code as a standalone widget so anyone can use it in their own applications. Reuse existing JavaScript code in your React components, and build a new React view on top of an existing data model shared with a legacy application. When you finish this book, you'll be well on your way to solving your front-end problems with React. What You Need: Node.js 6.x or later, and a modern web browser.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781680504484",
          },
          {
            type: "ISBN_10",
            identifier: "1680504487",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 164,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Tg9QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Tg9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Tg9QDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=34&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Tg9QDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Tg9QDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 1699.2,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 1699.2,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Tg9QDwAAQBAJ&rdid=book-Tg9QDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1699200000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 1699200000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Tg9QDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "When you finish this book, you&#39;ll be well on your way to solving your front-end problems with React. What You Need: Node.js 6.x or later, and a modern web browser.",
      },
    },
    {
      kind: "books#volume",
      id: "8RhKDwAAQBAJ",
      etag: "kO0jnVa1ZOA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/8RhKDwAAQBAJ",
      volumeInfo: {
        title: "Progressive Web Apps with React",
        subtitle:
          "Create lightning fast web apps with native power using React and Firebase",
        authors: ["Scott Domes"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2017-10-24",
        description:
          "Enhance the performance of your applications by using React and adding the Progressive web app capability to it About This Book Bring the best of mobile sites and native apps to your users with progressive web applications Create fast, reliable, and engaging PWAs with React and Firebase Create high-performance applications even with low connection speeds by leveraging modern web technologies Who This Book Is For This book is for Javascript Developers who want to develop high performance Web User Interfaces. This book requires basic knowledge of HTML, CSS and JavaScript. What You Will Learn Set up Webpack configuration, as well as get the development server running Learn basic Firebase configuration and deployment Create routes, manage multiple components, and learn how to use React Router v4 to manage the flow of data Use React life cycle methods to load data Add a service worker to the app and learn how it works Use a service worker to send Push Notifications Configure Webpack to split up the JavaScript bundle and lazy load component files Learn how to use the web Cache API to use your app offline Audit PWAs with Google's Lighthouse tool In Detail For years, the speed and power of web apps has lagged behind native applications. Progressive Web Apps (PWAs) aim to solve this by bridging the gap between the web apps and native apps, delivering a host of exciting features. Simultaneously, React is fast becoming the go-to solution for building modern web UIs, combining ease of development with performance and capability. Using React alongside PWA technology will make it easy for you to build a fast, beautiful, and functional web app. After an introduction and brief overview of the goals of PWAs, the book moves on to setting up the application structure. From there, it covers the Webpack build process and the process of creating React components. You'll learn how to set up the backend database and authentication solution to communicate with Firebase and how to work with React Router. Next, you will create and configure your web app manifest, making your PWA installable on mobile devices. Then you'll get introduced to service workers and see how they work as we configure the app to send push notifications using Firebase Cloud Messaging. We'll also explore the App Shell pattern, a key concept in PWAs and look at its advantages regarding efficient performance. Finally, you'll learn how to add offline capabilities to the app with caching and confirm your progress by auditing your PWA with Lighthouse. Also, you'll discover helper libraries and shortcuts that will help you save time and understand the future of PWA development. Style and approach This is a step-by-step book, wherein, you will use the React framework to create a complete progressive web app.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788296137",
          },
          {
            type: "ISBN_10",
            identifier: "1788296133",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 302,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.2.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=8RhKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=8RhKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=8RhKDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=35&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=8RhKDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=8RhKDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=8RhKDwAAQBAJ&rdid=book-8RhKDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=8RhKDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Enhance the performance of your applications by using React and adding the Progressive web app capability to it About This Book Bring the best of mobile sites and native apps to your users with progressive web applications Create fast, ...",
      },
    },
    {
      kind: "books#volume",
      id: "HAKdjwEACAAJ",
      etag: "UHSHIC8MTCA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/HAKdjwEACAAJ",
      volumeInfo: {
        title: "React Quickly",
        subtitle: "Painless web apps with React, JSX, Redux, and GraphQL",
        authors: ["Azat Mardan"],
        publisher: "Manning",
        publishedDate: "2017-09-28",
        description:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology Successful user interfaces need to be visually interesting, fast, and flowing. The React.js JavaScript library supercharges view-heavy web applications by improving data flow between UI components. React sites update visual elements efficiently and smoothly, minimizing page reloads. React is developer friendly, with a strong ecosystem to support the dev process along the full application stack. And because it's all JavaScript, React is instantly familiar. About the Book React Quickly is the tutorial for web developers who want to get started fast with React.js. Following carefully chosen and clearly explained examples, you'll learn React development using your existing JavaScript and web dev skills. You'll explore a host of different projects as you learn about web components, forms, and data. What's Inside Master React fundamentals Build full web apps with data and routing Test components Optimize React apps About the Reader This book is for developers comfortable building web applications with JavaScript. About the Author Azat Mardan is a Tech Fellow at Capital One with extensive experience using and teaching JavaScript and Node, and author of several books on JavaScript, Node, React, and Express. Table of Contens PART 1 - REACT FOUNDATION Meeting React Baby steps with React Introduction to JSX Making React interactive with states React component lifecycle events Handling events in React Working with forms in React Scaling React components Project: Menu component Project: Tooltip component Project: Timer component PART 2 - REACT ARCHITECTURE The Webpack build tool React routing Working with data using Redux Working with data using GraphQL Unit testing React with Jest React on Node and Universal JavaScript Project: Building a bookstore with React Router Project: Checking passwords with Jest Project: Implementing autocomplete with Jest, Express, and MongoDB APPENDIXES Appendix A - Installing applications used in this book Appendix B - React cheatsheet Appendix C - Express.js cheatsheet Appendix D - MongoDB and Mongoose cheatsheet Appendix E - ES6 for success",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1617293342",
          },
          {
            type: "ISBN_13",
            identifier: "9781617293344",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=HAKdjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=HAKdjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=HAKdjwEACAAJ&dq=react&hl=&cd=36&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=HAKdjwEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Quickly.html?hl=&id=HAKdjwEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=HAKdjwEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.",
      },
    },
    {
      kind: "books#volume",
      id: "ZRLmDwAAQBAJ",
      etag: "WLK/TAJDFOI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ZRLmDwAAQBAJ",
      volumeInfo: {
        title: "Taming the State in React",
        subtitle: "Your journey to master Redux and MobX",
        authors: ["Robin Wieruch"],
        publisher: "Robin Wieruch",
        publishedDate: "2018-05-08",
        description:
          "The book dives deeply into state management in React. You will learn everything about React's local state and state management with Redux and MobX. It comes with a lot of best practices, techniques and concepts. Along the way you will have practical hands on experiences by building own applications. The book turned out to exceed all my expectations. What started as an attempt to write a introductory book about state management in React with Redux, turned out into a full blown 250-page book which showcases MobX as alternative state management library, implements exciting applications along the way and has boilerplate projects to get you started in learning and building applications with these libraries. The bigger idea was to write a book which gives learners a consistent way to study the topic state management. I had the feeling that there exist way too many, partly inconsistent or outdated, tutorials around these topics and it is hard for learners to choose from so many opportunities. I thought, one well structured book should help newcomers to get started easily in the topic of state management with React's local state, Redux and MobX. Afterward, everyone should be on one well set level to build his/her own applications with Redux or MobX. The book teaches you how to use local state in React and scaling React applications with advanced practices, patterns and techniques. Afterward, the ebook dives into learning Redux and MobX as libraries for state management. These libraries are taught from scratch without React but in combination with React later on. However, all these learnings are not necessarily bound to React as view layer library. They can be applied in other view layer (component based) libraries, such as Vue.js, or single page application (SPA) frameworks, such as Angular.js, too. If you are new to React and want to learn React before, I recommend you to read the up to date book The Road to learn React. Due to Redux's popularity, the book teaches more about Redux than MobX. But it is planned to grow the MobX part too, because I am really into that library as well. For both state management libraries, Redux and MobX, you will learn to use them standalone, to connect them to React applications in multiple ways, and to apply best practices, patterns and tricks to scale them in larger applications. You will learn about using JavaScript ES6 to keep your state immutable, middleware in Redux, and flat and normalized state structures. Afterward, the terms actions, reducers, store(s), connected components and so on, will not be foreign subjects to you anymore. After reading the book, I believe you are ready to build your own applications in any (view layer) library or SPA framework of your choice with Redux or MobX. But when using React, you are setup with advanced knowledge about React's local state to use it in larger applications.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781720710769",
          },
          {
            type: "ISBN_10",
            identifier: "1720710767",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 360,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ZRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ZRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=ZRLmDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=37&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ZRLmDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ZRLmDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2146.75,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2146.75,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ZRLmDwAAQBAJ&rdid=book-ZRLmDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2146750000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2146750000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ZRLmDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: "The book dives deeply into state management in React.",
      },
    },
    {
      kind: "books#volume",
      id: "l8m8DQAAQBAJ",
      etag: "/FAUHqjVJUs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/l8m8DQAAQBAJ",
      volumeInfo: {
        title: "Learning React",
        subtitle: "Learning React ePub _1",
        authors: ["Kirupa Chinnathambi"],
        publisher: "Addison-Wesley Professional",
        publishedDate: "2016-12-27",
        description:
          "Learning React A hands-on guide to building maintainable, high-performing web application user interfaces using the React JavaScript library As far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier. What React isn’t, though, is beginner-friendly and approachable. Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help you understand the fundamentals of React and how to use it to build really performant (and awesome) apps. Build your first React app Create components to define parts of your UI Combine components into other components to build more complex UIs Use JSX to specify visuals without writing full-fledged JavaScript Deal with maintaining state Work with React’s way of styling content Make sense of the mysterious component lifecycle Build multi-page apps using routing and views Optimize your React workflow using tools such as Node, Babel, webpack, and others Contents at a Glance Chapter 1 Introducing React Chapter 2 Building Your First React App Chapter 3 Components in React Chapter 4 Styling in React Chapter 5 Creating Complex Components Chapter 6 Transferring Properties (Props) Chapter 7 Meet JSX–Again! Chapter 8 Dealing with State Chapter 9 Going from Data to UI Chapter 10 Working with Events Chapter 11 The Component Lifecycle Chapter 12 Accessing DOM Elements Chapter 13 Creating a Single-Page App Using React Router Chapter 14 Building a Todo List App Chapter 15 Setting Up Your React Development Environment Chapter 16 The End Chapter 17 (Web Edition) Working With External Data Chapter 18 (Web Edition) Creating a Sliding Menu Using React Motion Register your book at informit.com/register for free access to the Web Edition and two exclusive bonus chapters.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780134546537",
          },
          {
            type: "ISBN_10",
            identifier: "0134546539",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 240,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=l8m8DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=l8m8DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=l8m8DQAAQBAJ&printsec=frontcover&dq=react&hl=&cd=38&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=l8m8DQAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Learning_React.html?hl=&id=l8m8DQAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-epub.acsm?id=l8m8DQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-pdf.acsm?id=l8m8DQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=l8m8DQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help you understand the fundamentals of React and how to use it to build really performant (and awesome) apps.",
      },
    },
    {
      kind: "books#volume",
      id: "anteDwAAQBAJ",
      etag: "4X1vwWbJ76A",
      selfLink: "https://www.googleapis.com/books/v1/volumes/anteDwAAQBAJ",
      volumeInfo: {
        title: "Full-Stack React Projects",
        subtitle:
          "Modern web development using React 16, Node, Express, and MongoDB",
        authors: ["Shama Hoque"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-05-29",
        description:
          "Combining React with industry tested server-side technologies such as Node, Express, and MongoDB creates a diverse array of possibilities when developing real-world web applications. This book guides you through setting up for MERN-based web development to building social media, an online marketplace, media streaming, and VR-infused game ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788832946",
          },
          {
            type: "ISBN_10",
            identifier: "1788832949",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 460,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.2.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=anteDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=anteDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=anteDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=39&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=anteDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=anteDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 828.35,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 414.18,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=anteDwAAQBAJ&rdid=book-anteDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 828350000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 414180000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=anteDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book guides you through setting up for MERN-based web development to building social media, an online marketplace, media streaming, and VR-infused game .",
      },
    },
    {
      kind: "books#volume",
      id: "00DIzgEACAAJ",
      etag: "EmwHxFE5R9o",
      selfLink: "https://www.googleapis.com/books/v1/volumes/00DIzgEACAAJ",
      volumeInfo: {
        title: "Full-Stack Web Development with GraphQl and React",
        subtitle:
          "Build Scalable Full-Stack Applications with React 18 While Learning to Solve Complex Problems with GraphQl",
        authors: ["Sebastian Grebe"],
        publisher: "Packt Publishing",
        publishedDate: "2022-02-28",
        description:
          "Unleash the power of GraphQL, React 17, Node, and Express to build a scalable and production-ready application from scratch to be deployed on AWS Key Features: Build full-stack applications with modern APIs using GraphQL and React Hooks Integrate Apollo into React and build frontend components using GraphQL Implement a self-updating notification pop-up with a unique GraphQL feature called Subscriptions Book Description: React and GraphQL, when combined, provide you with a very dynamic, efficient, and stable tech stack to build web-based applications. GraphQL is a modern solution for querying an API that represents an alternative to REST and is the next evolution in web development. This book guides you in creating a full-stack web application from scratch using modern web technologies such as Apollo, Express.js, Node.js, and React. First, you'll start by configuring and setting up your development environment. Next, the book demonstrates how to solve complex problems with GraphQL, such as abstracting multi-table database architectures and handling image uploads using Sequelize. You'll then build a complete Graphbook from scratch. While doing so, you'll cover the tricky parts of connecting React to the backend, and maintaining and synchronizing state. In addition to this, you'll also learn how to write Reusable React components and use React Hooks. Later chapters will guide you through querying data and authenticating users in order to enable user privacy. Finally, you'll explore how to deploy your application on AWS and ensure continuous deployment using Docker and CircleCI. By the end of this web development book, you'll have learned how to build and deploy scalable full-stack applications with ease using React and GraphQL. What You Will Learn: Build a GraphQL API by implementing models and schemas with Apollo and Sequelize Set up an Apollo Client and build frontend components using React Write Reusable React components and use React Hooks Authenticate and query user data using GraphQL Use Mocha to write test cases for your full-stack application Deploy your application to AWS using Docker and CircleCI Who this book is for: This React GraphQL book is for web developers familiar with React and GraphQL who want to enhance their skills and build full-stack applications using industry standards like React, Apollo, Node.js, and SQL at scale while learning to solve complex problems with GraphQL.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1801077886",
          },
          {
            type: "ISBN_13",
            identifier: "9781801077880",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 472,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=00DIzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=00DIzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=00DIzgEACAAJ&dq=react&hl=&cd=40&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=00DIzgEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Full_Stack_Web_Development_with_GraphQl.html?hl=&id=00DIzgEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=00DIzgEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This guide to React and GraphQL will help developers working with web-based technologies put their knowledge to work.",
      },
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBooks, setFilterBooks] = useState([
    {
      kind: "books#volume",
      id: "jLkrDwAAQBAJ",
      etag: "QQ5w4PS8pKI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/jLkrDwAAQBAJ",
      volumeInfo: {
        title: "React and React Native",
        authors: ["Adam Boduch"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2017-03-08",
        description:
          "Use React and React Native to build applications for desktop browsers, mobile browsers, and even as native mobile apps About This Book Build React and React Native applications using familiar component concepts Dive deep into each platform, from routing in React to creating native mobile applications that can run offline Use Facebook's Relay, React and GraphQL technologies, to create a unified architecture that powers both web and native applications Who This Book Is For This book is written for any JavaScript developer—beginner or expert—who wants to start learning how to put both of Facebook's UI libraries to work. No knowledge of React is needed, though a working knowledge of ES2015 will help you follow along better. What You Will Learn Craft reusable React components Control navigation using the React Router to help keep your UI in sync with URLs Build isomorphic web applications using Node.js Use the Flexbox layout model to create responsive mobile designs Leverage the native APIs of Android and iOS to build engaging applications with React Native Respond to gestures in a way that's intuitive for the user Use Relay to build a unified data architecture for your React UIs In Detail React and React Native allow you to build cross-platform desktop and mobile applications using Facebook's innovative UI libraries. Combined with the Flux data architecture and Relay, you can now create powerful and feature-complete applications from just one code base! This book is split into three parts. The first part shows you how to start crafting composable UIs using React, from rendering with JSX and creating reusable components through to routing and creating isomorphic applications that run on Node. We then move on to showing you how to take the concepts of React and apply them to building Native UIs using React Native. You'll find out how to build responsive and streamlined UIs that can properly handle user interactions in a mobile environment. You'll also learn how to access device-specific APIs such as the geolocation API, and how to handle offline development with React Native. Finally, we'll tie all of these skills together and shows you how you can create React applications that run on every major platform. As well as understanding application state in depth, you'll learn how to leverage Relay to make feature-complete, data-driven web and native mobile applications. Style and approach Split into three major sections to help organize your learning, this hands-on, code-first book will help you get up to speed with React and React Native—the UI framework that powers Netflix, Yahoo, and Facebook.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781786469571",
          },
          {
            type: "ISBN_10",
            identifier: "178646957X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 485,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=jLkrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=jLkrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=jLkrDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=jLkrDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=jLkrDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3866.85,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3866.85,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=jLkrDwAAQBAJ&rdid=book-jLkrDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3866850000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3866850000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=jLkrDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Use React and React Native to build applications for desktop browsers, mobile browsers, and even as native mobile apps About This Book Build React and React Native applications using familiar component concepts Dive deep into each platform, ...",
      },
    },
    {
      kind: "books#volume",
      id: "2HvGDwAAQBAJ",
      etag: "LlsF6fMY4R0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2HvGDwAAQBAJ",
      volumeInfo: {
        title: "React Projects",
        subtitle:
          "Build 12 real-world applications from scratch using React, React Native, and React 360",
        authors: ["Roy Derks"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-12-20",
        description:
          "Build cross-platform applications of varying complexity for the web, mobile, and VR devices using React tooling Key FeaturesBuild React applications at scale using effective React patterns and best practicesExplore React features such as Hooks, the Context API, and the Suspense APIExtend React’s integration with React Native for building cross-platform mobile apps and gamesBook Description Developed by Facebook, React is a popular library for building impressive user interfaces. React extends its capabilities to the mobile platform using the React Native framework and integrates with popular web and mobile tools to build scalable applications. React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools such as GraphQL, Expo, and React 360. You'll start building a real-world project right from the first chapter and get hands on with developing scalable applications as you advance to building more complex projects. Throughout the book, you'll use the latest versions of React and React Native to explore features such as Higher Order Components (HOC), Context, and Hooks on multiple platforms, which will help you build full stack web and mobile applications efficiently. Finally, you'll delve into unit testing with Jest to build test-driven apps. By the end of this React book, you'll have developed the skills necessary to start building scalable React apps across web and mobile platforms. What you will learnCreate a wide range of applications using various modern React tools and frameworksDiscover how React Hooks modernize state management for React appsDevelop progressive web applications using React componentsBuild test-driven React applications using the Jest and Enzyme frameworksUnderstand full stack development using React, Apollo, and GraphQLPerform server-side rendering using React and React RouterDesign gestures and animations for a cross-platform game using React NativeWho this book is for The book is for JavaScript developers who want to explore React tooling and frameworks for building cross-platform applications. Basic knowledge of web development, ECMAScript, and React will assist with understanding key concepts covered in this book.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789953398",
          },
          {
            type: "ISBN_10",
            identifier: "1789953391",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 465,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.3.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=2HvGDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2HvGDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2HvGDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2371.79,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2371.79,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2HvGDwAAQBAJ&rdid=book-2HvGDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2371790000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2371790000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2HvGDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Basic knowledge of web development, ECMAScript, and React will assist with understanding key concepts covered in this book.",
      },
    },
    {
      kind: "books#volume",
      id: "XCLhDwAAQBAJ",
      etag: "DOV0umAITOU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/XCLhDwAAQBAJ",
      volumeInfo: {
        title: "React and React Native",
        subtitle:
          "A complete hands-on guide to modern web and mobile development with React.js",
        authors: ["Adam Boduch", "Roy Derks"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2020-04-30",
        description:
          "Get up to speed with React, React Native, GraphQL and Apollo for building cross-platform native apps with the help of practical examples Key FeaturesCovers the latest features of React such as Hooks, Suspense, NativeBase, and Apollo in this updated third editionGet to grips with the React architecture for writing easy-to-manage web and mobile applicationsUnderstand GraphQL and Apollo for building a scalable backend for your cross-platform appsBook Description React and React Native, Facebook's innovative User Interface (UI) libraries, are designed to help you build robust cross-platform web and mobile applications. This updated third edition is improved and updated to cover the latest version of React. The book particularly focuses on the latest developments in the React ecosystem, such as modern Hook implementations, code splitting using lazy components and Suspense, user interface framework components using Material-UI, and Apollo. In terms of React Native, the book has been updated to version 0.62 and demonstrates how to apply native UI components for your existing mobile apps using NativeBase. You will begin by learning about the essential building blocks of React components. Next, you'll progress to working with higher-level functionalities in application development, before putting this knowledge to use by developing user interface components for the web and for native platforms. In the concluding chapters, you'll learn how to bring your application together with a robust data architecture. By the end of this book, you'll be able to build React applications for the web and React Native applications for multiple mobile platforms. What you will learnDelve into the React architecture, component properties, state, and contextGet to grips with React Hooks for handling functions and componentsImplement code splitting in React using lazy components and SuspenseBuild robust user interfaces for mobile and desktop apps using Material-UIWrite shared components for Android and iOS mobile apps using React NativeSimplify layout design for React Native apps using NativeBaseWrite GraphQL schemas to power web and mobile appsImplement web and mobile components that are driven by ApolloWho this book is for This book is for any JavaScript developer who wants to start learning how to use Facebook's UI libraries, React and React Native, for mobile and web application development. Although no prior knowledge of React is needed, working knowledge of JavaScript programming will help you understand the concepts covered in the book more effectively.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781839212437",
          },
          {
            type: "ISBN_10",
            identifier: "1839212438",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 505,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.3.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=XCLhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=XCLhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=XCLhDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=3&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=XCLhDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=XCLhDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 5888.19,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 5888.19,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=XCLhDwAAQBAJ&rdid=book-XCLhDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 5888190000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 5888190000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=XCLhDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "By the end of this book, you&#39;ll be able to build React applications for the web and React Native applications for multiple mobile platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "CSj5DwAAQBAJ",
      etag: "jNGVgmvxS7Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/CSj5DwAAQBAJ",
      volumeInfo: {
        title: "The The React Workshop",
        subtitle:
          "Get started with building web applications using practical tips and examples from React use cases",
        authors: [
          "Brandon Richey",
          "Ryan Yu",
          "Endre Vegh",
          "Theofanis Despoudis",
          "Anton Punith",
          "Florian Sloot",
        ],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2020-08-21",
        description:
          "Work through engaging exercises and activities and gain practical skills to make your web applications function effortlessly with the help of React Key FeaturesExplore the React environment by creating live projectsSolve real-world problems relating to building modern web applicationsGain a thorough understanding of how data moves through different React componentsBook Description Are you interested in how React takes command of the view layer for web and mobile apps and changes the data of large web applications without needing to reload the page? This workshop will help you learn how and show you how to develop and enhance web apps using the features of the React framework with interesting examples and exercises. The workshop starts by demonstrating how to create your first React project. You’ll tap into React’s popular feature JSX to develop templates and use DOM events to make your project interactive. Next, you’ll focus on the lifecycle of the React component and understand how components are created, mounted, unmounted, and destroyed. Later, you’ll create and customize components to understand the data flow in React and how props and state communicate between components. You’ll also use Formik to create forms in React to explore the concept of controlled and uncontrolled components and even play with React Router to navigate between React components. The chapters that follow will help you build an interesting image-search app to fetch data from the outside world and populate the data to the React app. Finally, you’ll understand what ref API is and how it is used to manipulate DOM in an imperative way. By the end of this React book, you’ll have the skills you need to set up and create web apps using React. What you will learnUse JSX to include logic in the view layer of applicationsGet familiar with the important methods and events in the React lifecycleDistinguish between class and functional component syntaxesCreate forms with Formik and handle errorsUnderstand the React Hooks API and the problems it can solveFetch outside data using the Axios library and populate the data to the appWho this book is for The React Workshop is for web developers and programmers who are looking to learn React and use it for creating and enhancing web applications. Although the workshop is for beginners, prior knowledge of JavaScript programming and HTML and CSS is necessary to easily understand the concepts that are covered.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781838821661",
          },
          {
            type: "ISBN_10",
            identifier: "183882166X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 805,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.3.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=CSj5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=CSj5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=CSj5DwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=4&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=CSj5DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=CSj5DwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=CSj5DwAAQBAJ&rdid=book-CSj5DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=CSj5DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "What you will learnUse JSX to include logic in the view layer of applicationsGet familiar with the important methods and events in the React lifecycleDistinguish between class and functional component syntaxesCreate forms with Formik and ...",
      },
    },
    {
      kind: "books#volume",
      id: "Iv1wDwAAQBAJ",
      etag: "eTFo+WsaXRg",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Iv1wDwAAQBAJ",
      volumeInfo: {
        title: "Hands-On Design Patterns with React Native",
        subtitle:
          "Proven techniques and patterns for efficient native mobile development with JavaScript",
        authors: ["Mateusz Grzesiukiewicz"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-09-29",
        description:
          "Learn how to write cross platform React Native code by using effective design patterns in the JavaScript world. Get to know industry standard patterns as well as situational patterns. Decouple your application with these set of “Idea patterns”. Key FeaturesMobile development in React Native should be done in a reusable way. Learn how to build scalable applications using JavaScript patterns that are battle tested.Try effective techniques on your own using over 80 standalone examples.Book Description React Native helps developers reuse code across different mobile platforms like iOS and Android. This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams. The book will focus only on the patterns that are relevant to JavaScript, ECMAScript, React and React Native. However, you can successfully transfer a lot of the skills and techniques to other languages. I call them “Idea patterns”. This book will start with the most standard development patterns in React like component building patterns, styling patterns in React Native and then extend these patterns to your mobile application using real world practical examples. Each chapter comes with full, separate source code of applications that you can build and run on your phone. The book is also diving into architectural patterns. Especially how to adapt MVC to React environment. You will learn Flux architecture and how Redux is implementing it. Each approach will be presented with its pros and cons. You will learn how to work with external data sources using libraries like Redux thunk and Redux Saga. The end goal is the ability to recognize the best solution for a given problem for your next mobile application. What you will learnExplore the design Patterns in React NativeLearn the best practices for React Native developmentExplore common React patterns that are highly used within React Native developmentLearn to decouple components and use dependency injection in your applicationsExplore the best ways of fetching data from the backend systemsLearn the styling patterns and how to implement custom mobile designsExplore the best ways to organize your application code in big codebasesWho this book is for The ideal target audience for this book are people eager to learn React Native design patterns who already know the basics of JavaScript. We can assume that the target audience already knows how to write Hello World in JavaScript and know what are the functions, recursive functions, JavaScript types and loops.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788999540",
          },
          {
            type: "ISBN_10",
            identifier: "1788999541",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 297,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Iv1wDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=5&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Iv1wDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Iv1wDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3163.57,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Iv1wDwAAQBAJ&rdid=book-Iv1wDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3163570000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Iv1wDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams.",
      },
    },
    {
      kind: "books#volume",
      id: "pXuUEAAAQBAJ",
      etag: "lImD8Bp+Mr0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/pXuUEAAAQBAJ",
      volumeInfo: {
        title: "Professional React Native",
        subtitle:
          "Expert techniques and solutions for building high-quality, cross-platform, production-ready apps",
        authors: ["Alexander Benedikt Kuttig"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2022-10-31",
        description:
          "Learn how React Native works under the hood and what this means for building large-scale, cross-platform, production-ready applications without compromising on the quality and performance Key FeaturesExplore a modern approach to React Native, covering state management, animations, gestures, and moreImplement best practices and practical techniques for creating large-scale, production-ready appsCreate a development process including workflow automation with GitHub Actions, Fastlane, and BitriseBook Description The React Native framework offers a range of powerful features that make it possible to efficiently build high-quality, easy-to-maintain frontend applications across multiple platforms such as iOS, Android, Linux, Mac OS X, Windows, and the web, helping you save both time and money. And this book is your key to unlocking its capabilities. Professional React Native provides the ultimate coverage of essential concepts, best practices, advanced processes, and tips for everyday developer problems. The book makes it easy to understand how React Native works under the hood using step-by-step explanations and practical examples so you can use this knowledge to develop highly performant apps. As you follow along, you'll learn the difference between React and React Native, navigate the React Native ecosystem, and revisit the basics of JavaScript and TypeScript needed to create a React Native application. What's more, you'll work with animations and even control your app with gestures. Finally, you'll be able to structure larger apps and improve developer efficiency through automated processes, testing, and continuous integration. By the end of this React native app development book, you'll have gained the confidence to build high-performance apps for multiple platforms, even on a bigger scale. What you will learnBecome familiar with how React Native works under the hoodUnderstand how to make the most of React Native for app developmentExplore different approaches to building apps across various platformsBecome familiar with process automation and automated testingContribute to open source code and structure your own code libraryUnderstand how to set up the architecture for bigger React Native projectsWho this book is for This book is for developers who want to get started with React Native as well as experienced React Native developers interested in building professional cross-platform applications. Familiarity with the basics of JavaScript (including its syntax) and general software engineering concepts, such as data types, control flows, and server/client structures, is required. Although useful, experience with React Native is not necessary.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781800561199",
          },
          {
            type: "ISBN_10",
            identifier: "1800561199",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 269,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.4.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=pXuUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=pXuUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=pXuUEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=6&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=pXuUEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=pXuUEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2811.93,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2811.93,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=pXuUEAAAQBAJ&rdid=book-pXuUEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2811930000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2811930000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=pXuUEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "And this book is your key to unlocking its capabilities. Professional React Native provides the ultimate coverage of essential concepts, best practices, advanced processes, and tips for everyday developer problems.",
      },
    },
    {
      kind: "books#volume",
      id: "OswftAEACAAJ",
      etag: "fd1MBLt3bJE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/OswftAEACAAJ",
      volumeInfo: {
        title: "React. Js Book",
        subtitle: "Learning React JavaScript Library from Scratch",
        authors: ["Greg Sidelnikov"],
        publishedDate: "2017-03-17",
        description:
          "My fourth web development book is simply called React.js Book. It will walk you step by step through the process of setting up a development environment and learning Reactive programming from start to finish. React is a library unlike any other I have worked with. Unlike jQuery where you had to learn a number of methods that do very specific things, it's largely inspired by a programming methodology for creating fast web applications.In addition you will be expected to know or at least be briefly familiar with prerequisite knowledge of other web development tools such as Node.js, NPM, Babel, JSX and WebPack. These are not required elements of programming with React, but without them things would be tough.As of 2017, Reactive programming is an alternative way of thinking about web applications. It provides software patterns that make your web app extremely responsive to user input and generally feel faster to the end-user (people who are using your application.) The Virtual DOM alone is enough of a reason to switch to React. Programming with React library, is a lot more than just learning about and using React objects, components, states, props and methods. It requires previous experience with JavaScript and at times assumes knowledge of software principles not inherent to React library itself.This book is not a list of object names, methods and functions with side explanations of what they do. Rather, it deals with the said principles involved in React programming thought up by the creators of React library. Principles that are usually understood by professional web developers and software engineers.For all these reasons stated above, this book will gradually walk you through the process of becoming familiar with React library, starting from basic concepts. Gradually, we will move toward more advanced subjects. So, prepare to be educated",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1521546185",
          },
          {
            type: "ISBN_13",
            identifier: "9781521546185",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 117,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=OswftAEACAAJ&dq=react&hl=&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=OswftAEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Js_Book.html?hl=&id=OswftAEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=OswftAEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "These are not required elements of programming with React, but without them things would be tough.As of 2017, Reactive programming is an alternative way of thinking about web applications.",
      },
    },
    {
      kind: "books#volume",
      id: "fCWGDwAAQBAJ",
      etag: "feeSUSlr3TQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/fCWGDwAAQBAJ",
      volumeInfo: {
        title: "React Native Cookbook",
        subtitle:
          "Recipes for solving common React Native development problems",
        authors: ["Dan Ward"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-01-31",
        description:
          "Improve your React Native mobile development skills and transition from web to mobile development with this solution-packed guide Key FeaturesLearn strategies and techniques to face React Native mobile development challenges head-onExplore ways to use iOS and Android for React Native development to maximize code reuse and cohesionBuild engaging user experiences with React NativeBook Description If you are a developer looking to create mobile applications with maximized code reusability and minimized cost, React Native is what you need. With this practical guide, you'll be able to build attractive UIs, tackle common problems in mobile development, and achieve improved performance in mobile environments. This book starts by covering the common techniques for React Native customization and helps you set up your development platforms. Over the course of the book, you'll work through a wide variety of recipes that help you create, style, and animate your apps with built-in React Native and custom third-party components. You'll also develop real-world browser-based authentication, build a fully functional audio player, and integrate Google Maps in your apps. This book will help you explore different strategies for working with data, including leveraging the popular Redux library and optimizing your app's dataflow. You'll also learn how to write native device functionality for new and existing React Native projects and how app deployment works. By the end of this book, you'll be equipped with tips and tricks to write efficient code and have the skills to build full iOS and Android applications using React Native. What you will learnBuild UI features and components using React NativeCreate advanced animations for UI componentsDevelop universal apps that run on phones and tabletsLeverage Redux to manage application flow and dataExpose both custom native UI components and application logic to React NativeEmploy open source third-party plugins to create React Native appsWho this book is for If you're a JavaScript developer looking for a practical guide for developing feature-rich mobile apps using React Native, this book is for you. Though not necessary, some experience of working with React will help you understand the React Native concepts covered in this book easily. While React Native development can be done on a Windows machine, certain aspects, such as running your apps on iOS devices and in the iOS simulator, or editing native code with Xcode, can only be done with a Mac.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788990431",
          },
          {
            type: "ISBN_10",
            identifier: "1788990439",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 583,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.4.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=fCWGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=fCWGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=fCWGDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=8&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=fCWGDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=fCWGDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2723.43,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2723.43,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=fCWGDwAAQBAJ&rdid=book-fCWGDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2723430000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2723430000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=fCWGDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book starts by covering the common techniques for React Native customization and helps you set up your development platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "jUvZDQAAQBAJ",
      etag: "M+UqRWiF6hc",
      selfLink: "https://www.googleapis.com/books/v1/volumes/jUvZDQAAQBAJ",
      volumeInfo: {
        title: "React: Building Modern Web Applications",
        authors: [
          "Jonathan Hayward",
          "Artemij Fedosejev",
          "Narayan Prusty",
          "Adam Horton",
          "Ryan Vice",
          "Ethan Holmes",
          "Tom Bray",
        ],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2016-06-10",
        description:
          "Master the art of building dynamic, modern web applications with React About This Book Learn the hot new frontend web framework from Facebook – ReactJS, an easy way of developing the V in MVC and a better approach to software engineering in JavaScript A fast-paced guide to designing and building scalable and maintainable web apps with React.js Learn all the new ES6 features and be among the most prominent JavaScript developers who can write efficient JS programs as per the latest standards Master the art of building modern web applications using React Learn to build modern native iOS and Android applications using JavaScript and the incredible power of React Who This Book Is For This course is for web developers that want to unlock high performance dynamism in the applications that they create. If you want a comprehensive journey into one of the most important JavaScript frameworks around today, dive into this course. What You Will Learn Take control of the front end with reactive JavaScript programming Discover what ReactJS offers your development - before mastering it Create React elements with properties and children Use JSX to speed up your React development process Test your React components with the Jest test framework Learn the latest syntax of ES6 Execute ES6 in a non-supported ES6 environment Learn the principles of object-oriented programming Create a complete single-page application Use an application design plan to write smarter, more meaningful code Learn how to use animations to give extra style to your application Get to grips with the React Native environment Write your own custom native UI components Integrate native modules in Objective-C and Java that interact with JavaScript In Detail ReactJS has helped to transform the web as we know it. Designed by Facebook to help developers build rapid, responsive UI that can deal with data-intensive usage, it's an essential component in any web developer's skillset. This ReactJS course, in five connected modules, provides you with a fast, engaging and practical route into ReactJS—so you can build powerful, elegant, and modern web applications. Beginning with the Reactive Programming with JavaScript module, you will learn how to take advantage of a reactive and functional programming paradigm to rethink how you approach your JavaScript code. It's built to help you understand the concepts, relevant and applicable for any frontend developer. You'll then dive a little deeper into ReactJS. The second module gives you a rapid look through the fundamentals of ReactJS, showing you how to build a basic application and demonstrating how to implement the Flux architecture. In the third module you will get to grips with ES6—this will make you a more fluent JavaScript developer, giving you control over ReactJS. You can put your old JavaScript hacks aside and instead explore how to create ES6 custom iterators. In the final two modules you'll learn how to fully master ReactJS, exploring its wider ecosystem of tools that have helped to make it one of the most important tools in web development today. Ending with insights and guidance on React Native, the tool built for today's demand for native, intuitive user experiences and interfaces, with this course you can be confident in building dynamic and modern apps with React. Style and approach Consisting of five separate modules, journey from the fundamentals of reactive programming to the exciting possibilities of React Native. Each module builds on each other, helping you to incrementally develop your skills and knowledge.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781786462848",
          },
          {
            type: "ISBN_10",
            identifier: "1786462842",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 910,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 3,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=jUvZDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=jUvZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=jUvZDQAAQBAJ&printsec=frontcover&dq=react&hl=&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=jUvZDQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=jUvZDQAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2105.11,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2105.11,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=jUvZDQAAQBAJ&rdid=book-jUvZDQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2105110000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2105110000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=jUvZDQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Master the art of building dynamic, modern web applications with React About This Book Learn the hot new frontend web framework from Facebook – ReactJS, an easy way of developing the V in MVC and a better approach to software engineering ...",
      },
    },
    {
      kind: "books#volume",
      id: "GPBbEAAAQBAJ",
      etag: "a+Yk7EMzvQo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/GPBbEAAAQBAJ",
      volumeInfo: {
        title: "Full-Stack Web Development with GraphQL and React",
        subtitle:
          "Taking React from frontend to full-stack with GraphQL and Apollo",
        authors: ["Sebastian Grebe"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2022-02-28",
        description:
          "Unleash the power of GraphQL, React 17, Node, and Express to build a scalable and production-ready application from scratch to be deployed on AWS Key FeaturesBuild full-stack applications with modern APIs using GraphQL and React HooksIntegrate Apollo into React and build frontend components using GraphQLImplement a self-updating notification pop-up with a unique GraphQL feature called SubscriptionsBook Description React and GraphQL, when combined, provide you with a very dynamic, efficient, and stable tech stack to build web-based applications. GraphQL is a modern solution for querying an API that represents an alternative to REST and is the next evolution in web development. This book guides you in creating a full-stack web application from scratch using modern web technologies such as Apollo, Express.js, Node.js, and React. First, you'll start by configuring and setting up your development environment. Next, the book demonstrates how to solve complex problems with GraphQL, such as abstracting multi-table database architectures and handling image uploads using Sequelize. You'll then build a complete Graphbook from scratch. While doing so, you'll cover the tricky parts of connecting React to the backend, and maintaining and synchronizing state. In addition to this, you'll also learn how to write Reusable React components and use React Hooks. Later chapters will guide you through querying data and authenticating users in order to enable user privacy. Finally, you'll explore how to deploy your application on AWS and ensure continuous deployment using Docker and CircleCI. By the end of this web development book, you'll have learned how to build and deploy scalable full-stack applications with ease using React and GraphQL. What you will learnBuild a GraphQL API by implementing models and schemas with Apollo and SequelizeSet up an Apollo Client and build frontend components using ReactWrite Reusable React components and use React HooksAuthenticate and query user data using GraphQLUse Mocha to write test cases for your full-stack applicationDeploy your application to AWS using Docker and CircleCIWho this book is for This React GraphQL book is for web developers familiar with React and GraphQL who want to enhance their skills and build full-stack applications using industry standards like React, Apollo, Node.js, and SQL at scale while learning to solve complex problems with GraphQL.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781801079174",
          },
          {
            type: "ISBN_10",
            identifier: "180107917X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 473,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=GPBbEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=GPBbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=GPBbEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=10&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=GPBbEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=GPBbEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=GPBbEAAAQBAJ&rdid=book-GPBbEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=GPBbEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book guides you in creating a full-stack web application from scratch using modern web technologies such as Apollo, Express.js, Node.js, and React. First, you&#39;ll start by configuring and setting up your development environment.",
      },
    },
    {
      kind: "books#volume",
      id: "EvwHzgEACAAJ",
      etag: "tY9GI1CiNfo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/EvwHzgEACAAJ",
      volumeInfo: {
        title: "React Js",
        subtitle:
          "Hands-On Full Stack Web Development Using React Js, 2nd Edition",
        authors: ["Nln Lnc", "Susan Fitzgerald"],
        publishedDate: "2020-10-14",
        description:
          "Facebook's React has changed the way we think about web applications and user interface development. Due to its design, you can use it beyond web. A feature known as the Virtual DOM enables this.In this chapter we'll go through some of the basic ideas behind the library so you understand React a little better before moving on.React is a JavaScript library that forces you to think in terms of components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state and where it belongs.Because state management is a difficult problem, a variety of solutions have appeared. In this book, we'll start by managing state ourselves and then push it to a Flux implementation known as Alt. There are also implementations available for several other alternatives, such as Redux, MobX, and Cerebral.React is pragmatic in the sense that it contains a set of escape hatches. If the React model doesn't work for you, it is still possible to revert back to something lower level. For instance, there are hooks that can be used to wrap older logic that relies on the DOM. This breaks the abstraction and ties your code to a specific environment, but sometimes that's the pragmatic thing to do.One of the fundamental problems of programming is how to deal with state. Suppose you are developing a user interface and want to show the same data in multiple places. How do you make sure the data is consistent?Historically we have mixed the concerns of the DOM and state and tried to manage it there. React solves this problem in a different way. It introduced the concept of the Virtual DOM to the masses.Virtual DOM exists on top of the actual DOM, or some other render target. It solves the state manipulation problem in its own way. Whenever changes are made to it, it figures out the best way to batch the changes to the underlying DOM structure. It is able to propagate changes across its virtual tree as in the image above.Virtual DOM PerformanceHandling the DOM manipulation this way can lead to increased performance. Manipulating the DOM by hand tends to be inefficient and is hard to optimize. By leaving the problem of DOM manipulation to a good implementation, you can save a lot of time and effort.React allows you to tune performance further by implementing hooks to adjust the way the virtual tree is updated. Though this is often an optional step.The biggest cost of Virtual DOM is that the implementation makes React quite big. You can expect the bundle sizes of small applications to be around 150-200 kB minified, React included. gzipping will help, but it's still big.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9798697691502",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 162,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=EvwHzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=EvwHzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=EvwHzgEACAAJ&dq=react&hl=&cd=11&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=EvwHzgEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Js.html?hl=&id=EvwHzgEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=EvwHzgEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, we&#39;ll start by managing state ourselves and then push it to a Flux implementation known as Alt.",
      },
    },
    {
      kind: "books#volume",
      id: "5_o8EAAAQBAJ",
      etag: "K/AB5hz+RX0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5_o8EAAAQBAJ",
      volumeInfo: {
        title: "React Cookbook",
        authors: ["David Griffiths", "Dawn Griffiths"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2021-08-11",
        description:
          "React helps you create and work on an app in just a few minutes. But learning how to put all the pieces together is hard. How do you validate a form? Or implement a complex multistep user action without writing messy code? How do you test your code? Make it reusable? Wire it to a backend? Keep it easy to understand? The React Cookbook delivers answers fast. Many books teach you how to get started, understand the framework, or use a component library with React, but very few provide examples to help you solve particular problems. This easy-to-use cookbook includes the example code developers need to unravel the most common problems when using React, categorized by topic area and problem. You'll learn how to: Build a single-page application in React using a rich UI Create progressive web applications that users can install and work with offline Integrate with backend services such as REST and GraphQL Automatically test for accessibility problems in your application Secure applications with fingerprints and security tokens using WebAuthn Deal with bugs and avoid common functional and performance problems",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781492085812",
          },
          {
            type: "ISBN_10",
            identifier: "1492085812",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 513,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5_o8EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5_o8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=5_o8EAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=12&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=5_o8EAAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Cookbook.html?hl=&id=5_o8EAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=5_o8EAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "How do you validate a form? Or implement a complex multistep user action without writing messy code? How do you test your code? Make it reusable? Wire it to a backend? Keep it easy to understand? The React Cookbook delivers answers fast.",
      },
    },
    {
      kind: "books#volume",
      id: "uUMQEAAAQBAJ",
      etag: "edmsyeRIn/Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/uUMQEAAAQBAJ",
      volumeInfo: {
        title: "Full-Stack React, TypeScript, and Node",
        subtitle:
          "Build cloud-ready web applications using React 17 with Hooks and GraphQL",
        authors: ["David Choi"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2020-12-18",
        description:
          "Discover the current landscape of full-stack development and how to leverage modern web technologies for building production-ready React.js applications to deploy on AWS Key FeaturesUnderstand the architecture of React and single-page applicationsBuild a modern Web API for your SPA using Node.js, Express, and GraphQLGain a clear and practical understanding of how to build a complete full-stack applicationBook Description React sets the standard for building high-performance client-side web apps. Node.js is a scalable application server that is used in thousands of websites, while GraphQL is becoming the standard way for large websites to provide data and services to their users. Together, these technologies, when reinforced with the capabilities of TypeScript, provide a cutting-edge stack for complete web application development. This book takes a hands-on approach to implementing modern web technologies and the associated methodologies for building full-stack apps. You’ll begin by gaining a strong understanding of TypeScript and how to use it to build high-quality web apps. The chapters that follow delve into client-side development with React using the new Hooks API and Redux. Next, you’ll get to grips with server-side development with Express, including authentication with Redis-based sessions and accessing databases with TypeORM. The book will then show you how to use Apollo GraphQL to build web services for your full-stack app. Later, you’ll learn how to build GraphQL schemas and integrate them with React using Hooks. Finally, you’ll focus on how to deploy your application onto an NGINX server using the AWS cloud. By the end of this book, you’ll be able to build and deploy complete high-performance web applications using React, Node, and GraphQL. What you will learnDiscover TypeScript’s most important features and how they can be used to improve code quality and maintainabilityUnderstand what React Hooks are and how to build React apps using themImplement state management for your React app using ReduxSet up an Express project with TypeScript and GraphQL from scratchBuild a fully functional online forum app using React and GraphQLAdd authentication to your web app using RedisSave and retrieve data from a Postgres database using TypeORMConfigure NGINX on the AWS cloud to deploy and serve your appsWho this book is for The book is for web developers who want to go beyond front-end web development and enter the world of full-stack web development by learning about modern web technologies and how they come together. A good understanding of JavaScript programming is required before getting started with this web development book.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781839214691",
          },
          {
            type: "ISBN_10",
            identifier: "1839214694",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 648,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=uUMQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=uUMQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=uUMQEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=13&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=uUMQEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=uUMQEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=uUMQEAAAQBAJ&rdid=book-uUMQEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=uUMQEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book takes a hands-on approach to implementing modern web technologies and the associated methodologies for building full-stack apps.",
      },
    },
    {
      kind: "books#volume",
      id: "ibejzQEACAAJ",
      etag: "JlNuGolncTE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ibejzQEACAAJ",
      volumeInfo: {
        title: "React Js",
        subtitle: "Modern Web Development Using React Js",
        authors: ["Susan Fitzgerald"],
        publishedDate: "2020-07-13",
        description:
          "React jsFacebook's React has changed the way we think about web applications and user interface development. Due to its design, you can use it beyond web. A feature known as the Virtual DOM enables this.In this chapter we'll go through some of the basic ideas behind the library so you understand React a little better before moving on.What is React?React is a JavaScript library that forces you to think in terms of components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state and where it belongs.Because state management is a difficult problem, a variety of solutions have appeared. In this book, we'll start by managing state ourselves and then push it to a Flux implementation known as Alt. There are also implementations available for several other alternatives, such as Redux, MobX, and Cerebral.React is pragmatic in the sense that it contains a set of escape hatches. If the React model doesn't work for you, it is still possible to revert back to something lower level. For instance, there are hooks that can be used to wrap older logic that relies on the DOM. This breaks the abstraction and ties your code to a specific environment, but sometimes that's the pragmatic thing to do.One of the fundamental problems of programming is how to deal with state. Suppose you are developing a user interface and want to show the same data in multiple places. How do you make sure the data is consistent?Historically we have mixed the concerns of the DOM and state and tried to manage it there. React solves this problem in a different way. It introduced the concept of the Virtual DOM to the masses.Virtual DOM exists on top of the actual DOM, or some other render target. It solves the state manipulation problem in its own way. Whenever changes are made to it, it figures out the best way to batch the changes to the underlying DOM structure. It is able to propagate changes across its virtual tree as in the image above.Virtual DOM PerformanceHandling the DOM manipulation this way can lead to increased performance. Manipulating the DOM by hand tends to be inefficient and is hard to optimize. By leaving the problem of DOM manipulation to a good implementation, you can save a lot of time and effort.React allows you to tune performance further by implementing hooks to adjust the way the virtual tree is updated. Though this is often an optional step.The biggest cost of Virtual DOM is that the implementation makes React quite big. You can expect the bundle sizes of small applications to be around 150-200 kB minified, React included. gzipping will help, but it's still big.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9798665987286",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 162,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ibejzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ibejzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=ibejzQEACAAJ&dq=react&hl=&cd=14&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=ibejzQEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Js.html?hl=&id=ibejzQEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ibejzQEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, we&#39;ll start by managing state ourselves and then push it to a Flux implementation known as Alt.",
      },
    },
    {
      kind: "books#volume",
      id: "MZRRDwAAQBAJ",
      etag: "R2r47OtSY2U",
      selfLink: "https://www.googleapis.com/books/v1/volumes/MZRRDwAAQBAJ",
      volumeInfo: {
        title:
          "React: Cross-Platform Application Development with React Native",
        subtitle: "Build 4 real-world apps with React Native",
        authors: ["Emilio Rodriguez Martinez"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-03-13",
        description:
          "With React Native, you can build native mobile apps that are much more powerful, interactive, and faster by using JavaScript. React Native helps web and mobile developers to build cross-platform apps at a high level. This book takes you through four projects to help understand of the framework and build mobile apps with native user experience.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789139600",
          },
          {
            type: "ISBN_10",
            identifier: "1789139600",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 183,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=MZRRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=MZRRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=MZRRDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=15&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=MZRRDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=MZRRDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 722.15,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 361.08,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=MZRRDwAAQBAJ&rdid=book-MZRRDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 722150000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 361080000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=MZRRDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "React Native helps web and mobile developers to build cross-platform apps at a high level. This book takes you through four projects to help understand of the framework and build mobile apps with native user experience.",
      },
    },
    {
      kind: "books#volume",
      id: "0DidDwAAQBAJ",
      etag: "u6cnbxay/vs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/0DidDwAAQBAJ",
      volumeInfo: {
        title: "React Native for Mobile Development",
        subtitle:
          "Harness the Power of React Native to Create Stunning iOS and Android Applications",
        authors: ["Akshat Paul", "Abhishek Nalwaya"],
        publisher: "Apress",
        publishedDate: "2019-06-12",
        description:
          "Develop native iOS and Android apps with ease using React Native. Learn by doing through an example-driven approach, and have a substantial running app at the end of each chapter. This second edition is fully updated to include ES7 (ECMAScript 7), the latest version of React Native (including Redux), and development on Android. You will start by setting up React Native and exploring the anatomy of React Native apps. You'll then move on to Redux data flow, how it differs from flux, and how you can include it in your React Native project to solve state management differently and efficiently. You will also learn how to boost your development by including popular packages developed by the React Native community that will help you write less; do more. Finally, you'll learn to how write test cases using Jest and submit your application to the App Store. React Native challenges the status quo of native iOS and Android development with revolutionary components, asynchronous execution, unique methods for touch handling, and much more. This book reveals the the path-breaking concepts of React.js and acquaints you with the React way of thinking so you can learn to create stunning user interfaces. What You'll Learn Build stunning iOS and Android applications Understand the Redux design pattern and use it in your project Interact with iOS and android device capabilities such as addressbook, camera, GPS and more with your apps Test and launch your application to the App StoreWho This Book Is For Anyone with JavaScript experience who wants to build native mobile applications but dreads the thought of programming in Objective-C or Java. Developers who have experience with JavaScript but are new or not acquainted to React Native or ReactJS.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781484244548",
          },
          {
            type: "ISBN_10",
            identifier: "1484244540",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 243,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=0DidDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=0DidDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=0DidDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=16&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=0DidDwAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Native_for_Mobile_Development.html?hl=&id=0DidDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_Native_for_Mobile_Development-sample-epub.acsm?id=0DidDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_Native_for_Mobile_Development-sample-pdf.acsm?id=0DidDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=0DidDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book reveals the the path-breaking concepts of React.js and acquaints you with the React way of thinking so you can learn to create stunning user interfaces.",
      },
    },
    {
      kind: "books#volume",
      id: "7KVYDwAAQBAJ",
      etag: "vBA9R1PV84s",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7KVYDwAAQBAJ",
      volumeInfo: {
        title: "Learning React",
        subtitle:
          "A Hands-On Guide to Building Web Applications Using React and Redux",
        authors: ["Kirupa Chinnathambi"],
        publisher: "Addison-Wesley Professional",
        publishedDate: "2018-04-26",
        description:
          "Learning React A hands-on guide to building web applications using React and Redux As far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier. What React isn’t, though, is beginner-friendly and approachable. Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help web developers new to React understand its fundamentals and how to use it to build really performant (and awesome) apps. The only book on the market that helps you get your first React app up and running in just minutes, Learning Reactis chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show you how to apply what you learn. Build your first React app Create components to define parts of your UI Combine components into other components to build more complex UIs Use JSX to specify visuals without writing full-fledged JavaScript Deal with maintaining state Work with React’s way of styling content Make sense of the mysterious component lifecycle Build multi-page apps using routing and views Optimize your React workflow using tools such as Node, Babel, webpack, and others Use Redux to make managing your app data and state easy Contents at a Glance 1 Introducing React 2 Building Your First React App 3 Components in React 4 Styling in React 5 Creating Complex Components 6 Transferring Properties 7 Meet JSX... Again! 8 Dealing with State in React 9 Going from Data to UI in React 10 Events in React 11 The Component Lifecycle 12 Accessing DOM Elements in React 13 Setting Up Your React Dev Environment 14 Working with External Data in React 15 Building an Awesome Todo List App in React 16 Creating a Sliding Menu in React 17 Avoiding Unnecessary Renders in React 18 Creating a Single-Page App in React Using React Router 19 Introduction to Redux 20 Using Redux with React",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780134843575",
          },
          {
            type: "ISBN_10",
            identifier: "0134843576",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 747,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.7.7.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7KVYDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7KVYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=7KVYDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=17&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=7KVYDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=7KVYDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2499.24,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2499.24,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=7KVYDwAAQBAJ&rdid=book-7KVYDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2499240000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2499240000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-epub.acsm?id=7KVYDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-pdf.acsm?id=7KVYDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=7KVYDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The only book on the market that helps you get your first React app up and running in just minutes, Learning Reactis chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show ...",
      },
    },
    {
      kind: "books#volume",
      id: "_TgzEAAAQBAJ",
      etag: "0BHFVmamrNo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/_TgzEAAAQBAJ",
      volumeInfo: {
        title: "React Quickly",
        subtitle: "Painless web apps with React, JSX, Redux, and GraphQL",
        authors: ["Azat Mardan"],
        publisher: "Simon and Schuster",
        publishedDate: "2017-08-20",
        description:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology Successful user interfaces need to be visually interesting, fast, and flowing. The React.js JavaScript library supercharges view-heavy web applications by improving data flow between UI components. React sites update visual elements efficiently and smoothly, minimizing page reloads. React is developer friendly, with a strong ecosystem to support the dev process along the full application stack. And because it's all JavaScript, React is instantly familiar. About the Book React Quickly is the tutorial for web developers who want to get started fast with React.js. Following carefully chosen and clearly explained examples, you'll learn React development using your existing JavaScript and web dev skills. You'll explore a host of different projects as you learn about web components, forms, and data. What's Inside Master React fundamentals Build full web apps with data and routing Test components Optimize React apps About the Reader This book is for developers comfortable building web applications with JavaScript. About the Author Azat Mardan is a Tech Fellow at Capital One with extensive experience using and teaching JavaScript and Node, and author of several books on JavaScript, Node, React, and Express. Table of Contens PART 1 - REACT FOUNDATION Meeting React Baby steps with React Introduction to JSX Making React interactive with states React component lifecycle events Handling events in React Working with forms in React Scaling React components Project: Menu component Project: Tooltip component Project: Timer component PART 2 - REACT ARCHITECTURE The Webpack build tool React routing Working with data using Redux Working with data using GraphQL Unit testing React with Jest React on Node and Universal JavaScript Project: Building a bookstore with React Router Project: Checking passwords with Jest Project: Implementing autocomplete with Jest, Express, and MongoDB APPENDIXES Appendix A - Installing applications used in this book Appendix B - React cheatsheet Appendix C - Express.js cheatsheet Appendix D - MongoDB and Mongoose cheatsheet Appendix E - ES6 for success",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781638353966",
          },
          {
            type: "ISBN_10",
            identifier: "1638353964",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 794,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=_TgzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=_TgzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=_TgzEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=18&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=_TgzEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=_TgzEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2624.32,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2624.32,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=_TgzEAAAQBAJ&rdid=book-_TgzEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2624320000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2624320000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_Quickly-sample-epub.acsm?id=_TgzEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=_TgzEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.",
      },
    },
    {
      kind: "books#volume",
      id: "A1fjDwAAQBAJ",
      etag: "ptdaoVVRszQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/A1fjDwAAQBAJ",
      volumeInfo: {
        title: "Essentials of Javascript",
        subtitle: "All about React Native",
        authors: ["Shaaran Lakshminarayanan"],
        publisher: "Shaaran Lakshminarayanan",
        publishedDate: "2020-05-12",
        description:
          "Do you want to make applications for Android and iOS ? Are you a developer who is bored of writing code for both Android and iOS ? In this series of books we will overcome the problem of having to write code for Android and iOS by using React Native. React Native is a framework developed by Facebook for creating native-style apps for iOS & Android under one common language, JavaScript. Initially, Facebook only developed React Native to support iOS. However with its recent support of the Android operating system, the library can now render mobile UIs for both platforms. Why React Native ? Not only react native allows you to create cross platform applications but react native also makes updating apps simple through over-the-app updates. Over the air update in react native is achieved through technologies such as CodePush with a few lines of code. Armed with React Native you’ll finally be able to make apps of your choice in no time and I’m glad to show you what React Native can do through this series of books. In this book we will learn the core concepts of Javascript to help us with our React Native Journey.",
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 27,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.0.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=A1fjDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=A1fjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=A1fjDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=19&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=A1fjDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=A1fjDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 0,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 0,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=A1fjDwAAQBAJ&rdid=book-A1fjDwAAQBAJ&rdot=1&source=gbs_api",
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=A1fjDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book we will learn the core concepts of Javascript to help us with our React Native Journey.",
      },
    },
    {
      kind: "books#volume",
      id: "e_l9zQEACAAJ",
      etag: "dpNhtanxpaY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/e_l9zQEACAAJ",
      volumeInfo: {
        title: "React and React Native",
        subtitle:
          "A Complete Hands-on Guide to Modern Web and Mobile Development with React.js",
        authors: ["Adam Boduch", "Roy Derks"],
        publishedDate: "2020-04-29",
        description:
          "Discover and learn how to use React and React Native to build mobile, desktop and web apps. From composable and Native UIs through to device-specific APIs and offline development, this book has everything you need to create engaging and user-friendly React applications which run on all major platforms.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1839211148",
          },
          {
            type: "ISBN_13",
            identifier: "9781839211140",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 526,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=e_l9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=e_l9zQEACAAJ&dq=react&hl=&cd=20&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=e_l9zQEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_and_React_Native.html?hl=&id=e_l9zQEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=e_l9zQEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "From composable and Native UIs through to device-specific APIs and offline development, this book has everything you need to create engaging and user-friendly React applications which run on all major platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "KOXPEAAAQBAJ",
      etag: "QWBzGjPbmcM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/KOXPEAAAQBAJ",
      volumeInfo: {
        title: "React Quickly, Second Edition",
        authors: ["Morten Barklund", "Azat Mardan"],
        publisher: "Simon and Schuster",
        publishedDate: "2023-09-05",
        description:
          "Learn the skills you need to build React applications quickly! This fully revised second edition introduces functional components, React hooks, static site generators, and more. In React Quickly, Second Edition you will learn how to: Master React fundamentals Implement best practices and the components of good architecture Build intuitive user interfaces Create dynamic components with JSX Use lightweight functional components in React Make your app interactive with stateful components Utilize React hooks Handle events like button clicks and pass data between components Build your skills with React fast! There’s no slow theory and tedious history in React Quickly—you’ll dive into React code right from the very first chapter. As you go, you’ll explore over 80 useful and practical examples that put React into action. This new second edition has been completely rewritten to cover the latest developments in the React framework. Perfect, whether you’re a React beginner or an experienced pro looking to keep their skills up to date. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the technology React makes it a breeze to build beautiful, reliable web frontends. This amazing JavaScript library has a modular architecture, so you can create, combine, and test components seamlessly. React is perfect for small prototypes, enterprise scale sites, and everything in between. About the book React Quickly, Second Edition offers a unique approach to learning the React framework. More than 80 concise examples guide you from your first steps through advanced applications. You’ll appreciate the up-to-date coverage of functional components, React hooks, and web accessibility, along with interesting projects to practice your new skill. What's inside Master React fundamentals Best practices of component-based design Create dynamic components with JSX Make your app interactive with stateful components About the reader For developers comfortable building web applications with JavaScript. About the author Morten Barklund is an expert in React, web testing, and accessibility and is the founder of Coding Heaven. Azat Mardan is a seasoned software engineer, startup mentor, and best-selling author. Table of Contents 1 Meeting React 2 Baby steps with React 3 Introduction to JSX 4 Functional Components 5 Making React interactive with states 6 Effects and the React component life cycle 7 Hooks to fuel your web applications 8 Handling events in React 9 Working with forms in React 10 Advanced React hooks for scaling 11 Project: Website menu 12 Project: Timer 13 Project: Task manager",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781633439290",
          },
          {
            type: "ISBN_10",
            identifier: "1633439291",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 454,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=KOXPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=KOXPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=KOXPEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=21&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=KOXPEAAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Quickly_Second_Edition.html?hl=&id=KOXPEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=KOXPEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "React is perfect for small prototypes, enterprise scale sites, and everything in between. About the book React Quickly, Second Edition offers a unique approach to learning the React framework.",
      },
    },
    {
      kind: "books#volume",
      id: "-dzJDAAAQBAJ",
      etag: "B9srSurQY6E",
      selfLink: "https://www.googleapis.com/books/v1/volumes/-dzJDAAAQBAJ",
      volumeInfo: {
        title: "Getting Started with React",
        authors: ["Doel Sengupta", "Manu Singhal", "Danillo Corvalan"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2016-04-29",
        description:
          "A light but powerful way to build dynamic real-time applications using ReactJS About This Book Learn how to develop powerful JavaScript applications using ReactJS Integrate a React-based app with an external API (Facebook login) while using React components, with the Facebook developer app Implement the Reactive paradigm to build stateless and asynchronous apps with React Who This Book Is For This book is for any front-end web or mobile-app developer who wants to learn ReactJS. Knowledge of basic JavaScript will give you a good head start with the book. What You Will Learn Understand the ReactJS basics through an overview Install and create your first React component Refactor the ReactJS component using JSX Integrate your React application with the Facebook login and Graph API, then fetch data from your liked pages in Facebook and display them in a browser Handle UI elements events with React, respond to users input, and create stateful components Use some core lifecycle events for integration and find out about ES6 syntaxes in the React world Understand the FLUX architecture and create an application using FLUX with React Make a component more reusable with mixins and validation helpers and structure your components properly Explore techniques to test your ReactJS code Deploy your code using webpack and Gulp In Detail ReactJS, popularly known as the V (view) of the MVC architecture, was developed by the Facebook and Instagram developers. It follows a unidirectional data flow, virtual DOM, and DOM difference that are generously leveraged in order to increase the performance of the UI. Getting Started with React will help you implement the Reactive paradigm to build stateless and asynchronous apps with React. We will begin with an overview of ReactJS and its evolution over the years, followed by building a simple React component. We will then build the same react component with JSX syntax to demystify its usage. You will see how to configure the Facebook Graph API, get your likes list, and render it using React. Following this, we will break the UI into components and you'll learn how to establish communication between them and respond to users input/events in order to have the UI reflect their state. You'll also get to grips with the ES6 syntaxes. Moving ahead, we will delve into the FLUX and its architecture, which is used to build client-side web applications and complements React's composable view components by utilizing a unidirectional data flow. Towards the end, you'll find out how to make your components reusable, and test and deploy them into a production environment. Finally, we'll briefly touch on other topics such as React on the server side, Redux and some advanced concepts. Style and approach The book follows a step-by-step, practical, tutorial approach with examples that explain the key concepts of ReactJS. Each topic is sequentially explained and contextually placed to give sufficient details of ReactJS.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781785284106",
          },
          {
            type: "ISBN_10",
            identifier: "178528410X",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 212,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=-dzJDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=-dzJDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=-dzJDAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=22&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=-dzJDAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=-dzJDAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=-dzJDAAAQBAJ&rdid=book--dzJDAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=-dzJDAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A light but powerful way to build dynamic real-time applications using ReactJS About This Book Learn how to develop powerful JavaScript applications using ReactJS Integrate a React-based app with an external API (Facebook login) while using ...",
      },
    },
    {
      kind: "books#volume",
      id: "0bpIEAAAQBAJ",
      etag: "lt24/ig40iQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/0bpIEAAAQBAJ",
      volumeInfo: {
        title: "Advanced Web Development with React",
        authors: ["Mohan Mehul"],
        publisher: "BPB Publications",
        publishedDate: "2020-02-26",
        description:
          "Level up your React and Next.js skills with advanced concepts about SSR and PWA Key Featuresa- Covers latest and core React concepts including React hooks and React reconcilera- Covers about Server Side Rendering with React and how to use it using Next.jsa- Covers about Progressive Web Apps in React and how to create thema- Covers intermediate and advanced React concepts like state managementa- Covers overview of React for beginners to catch with advanced concepts latera- Covers bleeding-edge React concepts on the future of React and how it would work eventuallyDescriptionThe book starts by introducing the reader to React, what it is and why you need a library like React to work with medium to large scale applications. We then move on to implementing simple client-side programs with React, uncovering modern React practices like React hooks and diving deep into various kinds of hooks. We then move to implement React on the server using Server-Side Rendering to bring benefits of the SEO world to the dynamic rendering nature of front-end libraries. For this, we use Next.js, a very popular implementation of Server-Side Rendering which comes with tons of good practices already baked in. We also take a look at how Progressive Web Apps can be created out of existing React codebases and what benefits it provides us. Finally, we end the book with some React internals (how to React works) and some bleeding-edge features in React which are expected to roll out in 2-3 years fully and would impact how to React works under the hood.What will you learna- What React is and how to get started with ita- Modern ways to code React applicationsa- Implementing Server-Side rendering with/without Next.js on the top of React librarya- Working with Progressive Web Apps in Reacta- How to React works under the hooda- Future of React and bleeding-edge React tech you can use todayWho this book is forThe reader is expected to have a decent understanding of JavaScript/HTML/CSS, and possibly, worked with React a little bit beforehand. Although the first 2 chapters cover basics of React, still it is recommended for users with at least a bit of knowledge and experience with React.Table of Contents1. React 1012. Setting up React3. Components4. State Management with React5. Server Side React6. Introduction to Next.js7. More with Next.js8. Progressive Web Apps9. Bleeding edge ReactAbout the AuthorMehul Mohan is an entrepreneur, developer and a security researcher. Currently, he is pursuing his bachelor's degree in CSE at BITS Pilani. He is a WWDC'19 Scholar, and runs codedamn - a platform for people to learn coding. You'll often find him creating programming tutorials on his YouTube channel, codedamn, having over 100,000 subscribers. He has been acknowledged by companies such as Google, Microsoft, Sony, etc. for his contributions as a security researcher. Your Blog links: https://codedamn.com https://mehulmohan.com His LinkedIn Profile: https://linkedin.com/in/mehulmpt",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9789389423600",
          },
          {
            type: "ISBN_10",
            identifier: "9389423600",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 184,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=0bpIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=0bpIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=0bpIEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=23&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=0bpIEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=0bpIEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 976.33,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 488.16,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=0bpIEAAAQBAJ&rdid=book-0bpIEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 976330000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 488160000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Advanced_Web_Development_with_React-sample-epub.acsm?id=0bpIEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Advanced_Web_Development_with_React-sample-pdf.acsm?id=0bpIEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=0bpIEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Finally, we end the book with some React internals (how to React works) and some bleeding-edge features in React which are expected to roll out in 2-3 years fully and would impact how to React works under the hood.What will you learna- What ...",
      },
    },
    {
      kind: "books#volume",
      id: "J89cEAAAQBAJ",
      etag: "f9ZCduZyT3Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/J89cEAAAQBAJ",
      volumeInfo: {
        title:
          "Beginning ReactJS Foundations Building User Interfaces with ReactJS",
        subtitle: "An Approachable Guide",
        authors: ["Chris Minnick"],
        publisher: "John Wiley & Sons",
        publishedDate: "2022-02-03",
        description:
          "Quickly learn the most widely used front-end development language with ease and confidence React JS Foundations: Building User Interfaces with ReactJS - An Approachable Guide walks readers through the fundamental concepts of programming with the explosively popular front-end tool known as React JS. Written by an accomplished full-stack engineer, speaker, and community organizer, React JS Foundations teaches readers how to understand React and how to begin building applications with it. The book: Explains and clarifies technical terminology with relevant and modern examples to assist people new to programming understand the language Helps experienced programmers quickly get up to speed with React Is stocked throughout with practical and applicable examples of day-to-day React work Perfect for beginner, intermediate, and advanced programmers alike, React JS Foundations will quickly bring you up to speed on one of the most useful and widely used front-end languages on the web today. You can start building your first application today.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781119685586",
          },
          {
            type: "ISBN_10",
            identifier: "1119685583",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 726,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=J89cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=J89cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=J89cEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=24&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=J89cEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=J89cEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 4897,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 4897,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=J89cEAAAQBAJ&rdid=book-J89cEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 4897000000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 4897000000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Beginning_ReactJS_Foundations_Building_U-sample-epub.acsm?id=J89cEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Beginning_ReactJS_Foundations_Building_U-sample-pdf.acsm?id=J89cEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=J89cEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This handy guide includes: Guides to understanding the JavaScript features used by React A step-by-step tutorial in writing your first React application How to write JSX code How to write class and function components How to use advanced ...",
      },
    },
    {
      kind: "books#volume",
      id: "4rltEAAAQBAJ",
      etag: "107ny/Pa3r8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/4rltEAAAQBAJ",
      volumeInfo: {
        title: "React Projects",
        subtitle:
          "Build advanced cross-platform projects with React and React Native to become a professional developer",
        authors: ["Roy Derks"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2022-04-29",
        description:
          "Learn how to develop real-world applications of varying complexity for the web, mobile, and VR devices using React, React Native, React 360, and more Key Features • Build React applications at scale using React patterns and best practices • Explore React features such as Hooks, the Context API, and the Suspense API • Extend React's integration with React Native for building cross-platform mobile apps and games Book Description Developed by Facebook, React is a popular library for building impressive user interfaces. React extends its capabilities to mobile platforms using the React Native framework and integrates with popular web and mobile tools to build scalable applications. React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools, such as GraphQL, Expo, and React 360. You'll start building a real-world project right from the first chapter and get hands-on with developing scalable applications as you advance to building more complex projects. Throughout the book, you'll use the latest versions of React and React Native to explore features such as routing, Context, and Hooks on multiple platforms, which will help you build full-stack web and mobile applications efficiently. Finally, you'll get to grips with unit testing with Jest and end-to-end testing with Cypress to build test-driven apps. By the end of this React book, you'll have developed the skills necessary to start building scalable React apps across web and mobile platforms. What you will learn • Create a wide range of applications using various modern React tools and frameworks • Discover how React Hooks modernize state management for React apps • Develop web applications using styled and reusable React components • Build test-driven React applications using Jest, React Testing Library, and Cypress • Understand full-stack development using GraphQL, Apollo, and React • Perform server-side rendering using React and Next.js • Create animated games using React Native and Expo • Design gestures and animations for a cross-platform game using React Native Who this book is for The book is for JavaScript developers who want to explore React tooling and frameworks for building cross-platform applications. Basic knowledge of web development, ECMAScript, and React will assist with understanding key concepts covered in this book. Table of Contents • Creating a Single-Page Application in React • Creating a Portfolio in React with Reusable Components and Routing • Building a Dynamic Project Management Board • Building a Server-Side-Rendered Community Feed Using Next.js • Build a Personal Shopping List Application Using Context and Hooks • Building an Application Exploring TDD Using the React Testing Library and Cypress • Building a Full-Stack E-Commerce Application with Next.js and GraphQL • Building an Animated Game Using React Native and Expo • Building a Full-Stack Social Media Application with React Native and Expo • Creating a Virtual Reality Application with React and Three.js",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781801078115",
          },
          {
            type: "ISBN_10",
            identifier: "1801078114",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 384,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=4rltEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=4rltEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=4rltEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=25&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=4rltEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=4rltEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2636.11,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=4rltEAAAQBAJ&rdid=book-4rltEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2636110000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=4rltEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "By the end of this React book, you&#39;ll have developed the skills necessary to start building scalable React apps across web and mobile platforms.",
      },
    },
    {
      kind: "books#volume",
      id: "dczDEAAAQBAJ",
      etag: "P/kiX4+51ag",
      selfLink: "https://www.googleapis.com/books/v1/volumes/dczDEAAAQBAJ",
      volumeInfo: {
        title: "Your First Week With React",
        authors: [
          "Maria Antonietta Perna",
          "Pavels Jelisejevs",
          "Michael Wanyoike",
          "Chris Laughlin",
          "Eric Greene",
          "Mark Brown",
          "Camilo Reyes",
        ],
        publisher: "SitePoint Pty Ltd",
        publishedDate: "2017-11-07",
        description:
          "React is a remarkable JavaScript library that' taken the development community by storm. In a nutshell, it's made it easier for developers to build interactive user interfaces for web, mobile and desktop platforms. One of its best features is its freedom from the problematic bugs inherent in MVC frameworks, where inconsistent views is a recurring problem for big projects. Today, thousands of companies worldwide are using React, including big names such as Netflix and AirBnB. React has become immensely popular, such that a number of apps have been ported to React -- including WhatsApp, Instagram and Dropbox. This book is a collection of tutorials, selected from SitePoint's React Hub, that will guide you through your first days with the amazingly flexible library.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781492065302",
          },
          {
            type: "ISBN_10",
            identifier: "1492065307",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 96,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=dczDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=dczDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=dczDEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=26&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=dczDEAAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Your_First_Week_With_React.html?hl=&id=dczDEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Your_First_Week_With_React-sample-epub.acsm?id=dczDEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Your_First_Week_With_React-sample-pdf.acsm?id=dczDEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=dczDEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book is a collection of tutorials, selected from SitePoint&#39;s React Hub, that will guide you through your first days with the amazingly flexible library.",
      },
    },
    {
      kind: "books#volume",
      id: "vHj7swEACAAJ",
      etag: "+ukauqYUQO8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/vHj7swEACAAJ",
      volumeInfo: {
        title: "React",
        subtitle:
          "Quickstart Step-by-step Guide to Learning React Javascript Library (React.js, Reactjs, Learning React Js, React Javascript, React Programming)",
        authors: ["Lionel Lopez"],
        publisher: "Createspace Independent Publishing Platform",
        publishedDate: "2017-09-07",
        description:
          "REACT This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming. This book is based on 17 chapters well managed and it will helps you to become a React JS expert in less than 7 days. Each chapter will contain a certain number of relevant topics with illustrations and exercises where necessary, this will all be finished off with an end of chapter quiz for an easy and enjoyable learning. Benefits of reading this book that you're not going to find anywhere else: It helps you to understand React Easily. You can learn how to install Node JS based on ReactJS. With React you can build applications fast. ReactJS is SEO friendly. It makes code writing simple. We can use React with other libraries. React JS is very light weight front-end framework which allows developers to create web applications faster. Great Community Support. Supports State Management using Redux. CLICK ADD TO CART TO GET THIS AMAZING BOOK!",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1976210232",
          },
          {
            type: "ISBN_13",
            identifier: "9781976210235",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 206,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=vHj7swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=vHj7swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=vHj7swEACAAJ&dq=react&hl=&cd=27&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=vHj7swEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React.html?hl=&id=vHj7swEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=vHj7swEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "REACT This book/tutorial is about ReactJS and it is designed to move you from beginner to advanced programming. This book is based on 17 chapters well managed and it will helps you to become a React JS expert in less than 7 days.",
      },
    },
    {
      kind: "books#volume",
      id: "Rt18DwAAQBAJ",
      etag: "j7VSmSd4phQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Rt18DwAAQBAJ",
      volumeInfo: {
        title: "Learn React with TypeScript 3",
        subtitle:
          "Beginner's guide to modern React web development with TypeScript 3",
        authors: ["Carl Rippon"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-11-29",
        description:
          "Start developing modern day component based web apps using React 16, Redux and TypeScript 3 with this easy to follow guide filled with practical examples. Key FeaturesLearn the latest and core features of React such as components, React Router, and suspenseDive into TypeScript 3 and it`s core components such as interfaces, types aliases, tuples, generics and much more.Build small-to-large scale single page applications with React, Redux, GraphQL and TypeScriptBook Description React today is one of the most preferred choices for frontend development. Using React with TypeScript enhances development experience and offers a powerful combination to develop high performing web apps. In this book, you’ll learn how to create well structured and reusable react components that are easy to read and maintain by leveraging modern web development techniques. We will start with learning core TypeScript programming concepts before moving on to building reusable React components. You'll learn how to ensure all your components are type-safe by leveraging TypeScript's capabilities, including the latest on Project references, Tuples in rest parameters, and much more. You'll then be introduced to core features of React such as React Router, managing state with Redux and applying logic in lifecycle methods. Further on, you'll discover the latest features of React such as hooks and suspense which will enable you to create powerful function-based components. You'll get to grips with GraphQL web API using Apollo client to make your app more interactive. Finally, you'll learn how to write robust unit tests for React components using Jest. By the end of the book, you'll be well versed with all you need to develop fully featured web apps with React and TypeScript. What you will learnGain a first-hand experience of TypeScript and its productivity features Transpile your TypeScript code into JavaScript for it to run in a browser Learn relevant advanced types in TypeScript for creating strongly typed and reusable components.Create stateful function-based components that handle lifecycle events using hooks Get to know what GraphQL is and how to work with it by executing basic queries to get familiar with the syntaxBecome confident in getting good unit testing coverage on your components using JestWho this book is for The ideal target audience for this book are web developers who want to get started with creating modern day web apps with React and TypeScript.You are expected to have a basic understanding of JavaScript and HTML programming. No prior knowledge of TypeScript and React is needed.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789618129",
          },
          {
            type: "ISBN_10",
            identifier: "1789618126",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 492,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Rt18DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Rt18DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Rt18DwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=28&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Rt18DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Rt18DwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Rt18DwAAQBAJ&rdid=book-Rt18DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Rt18DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, you’ll learn how to create well structured and reusable react components that are easy to read and maintain by leveraging modern web development techniques.",
      },
    },
    {
      kind: "books#volume",
      id: "cWdmDwAAQBAJ",
      etag: "lHkyNE/D8Xs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/cWdmDwAAQBAJ",
      volumeInfo: {
        title: "Beginning React",
        subtitle:
          "Simplify your frontend development workflow and enhance the user experience of your applications with React",
        authors: ["Andrea Chiarelli"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-07-25",
        description:
          "Take your web applications to a whole new level with efficient, component-based UIs that deliver cutting-edge interactivity and performance. Key Features Elaborately explains basics before introducing advanced topics Explains creating and managing the state of components across applications Implement over 15 practical activities and exercises across 11 topics to reinforce your learning Book Description Projects like Angular and React are rapidly changing how development teams build and deploy web applications to production. In this book, you’ll learn the basics you need to get up and running with React and tackle real-world projects and challenges. It includes helpful guidance on how to consider key user requirements within the development process, and also shows you how to work with advanced concepts such as state management, data-binding, routing, and the popular component markup that is JSX. As you complete the included examples, you’ll find yourself well-equipped to move onto a real-world personal or professional frontend project. What you will learn Understand how React works within a wider application stack Analyze how you can break down a standard interface into specific components Successfully create your own increasingly complex React components with HTML or JSX Correctly handle multiple user events and their impact on overall application state Understand the component lifecycle to optimize the UX of your application Configure routing to allow effortless, intuitive navigation through your components Who this book is for If you are a frontend developer who wants to create truly reactive user interfaces in JavaScript, then this is the book for you. For React, you’ll need a solid foundation in the essentials of the JavaScript language, including new OOP features that were introduced in ES2015. An understanding of HTML and CSS is assumed, and a basic knowledge of Node.js will be useful in the context of managing a development workflow, but is not essential.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789534924",
          },
          {
            type: "ISBN_10",
            identifier: "1789534925",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 90,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=cWdmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=cWdmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=cWdmDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=29&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=cWdmDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=cWdmDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 1229.55,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 614.78,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=cWdmDwAAQBAJ&rdid=book-cWdmDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1229550000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 614780000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=cWdmDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this book, you’ll learn the basics you need to get up and running with React and tackle real-world projects and challenges.",
      },
    },
    {
      kind: "books#volume",
      id: "s9eyEAAAQBAJ",
      etag: "WetOAJv9Mdw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/s9eyEAAAQBAJ",
      volumeInfo: {
        title: "React JavaScript Notes For Professionals",
        authors: ["Dr. Ashad ullah Qureshi"],
        publisher: "Concepts Books Publication",
        publishedDate: "2023-03-01",
        description:
          "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9798386385798",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 110,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=s9eyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=s9eyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=s9eyEAAAQBAJ&printsec=frontcover&dq=react&hl=&cd=30&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=s9eyEAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=s9eyEAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 293.82,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 205.67,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=s9eyEAAAQBAJ&rdid=book-s9eyEAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 293820000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 205670000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/React_JavaScript_Notes_For_Professionals-sample-pdf.acsm?id=s9eyEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=s9eyEAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      },
    },
    {
      kind: "books#volume",
      id: "Fs6KDwAAQBAJ",
      etag: "CiVReqO5WRk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Fs6KDwAAQBAJ",
      volumeInfo: {
        title: "Create React App 2 Quick Start Guide",
        subtitle: "Build React applications faster with Create React App",
        authors: ["Brandon Richey"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-02-27",
        description:
          "Integrate your React applications with React to build efficient web services. Key FeaturesLearn React by building applications with Create React AppCreate interactive UIs exploring the latest feature of CRA 2.0Build Progressive Web Applications for a more seamless webBook Description If you're a power user and you aren’t happy always reusing default configurations, from previous applications with each new application, then all you need is Create React App (CRA), a tool in the React ecosystem designed to help you create boilerplate code for building a web frontend. This book will help you use CRA to write React programs without significant configuration-related difficulties. With this quick start guide, you will integrate your applications with React to build efficient professional web services.You will learn to design UIs with the features of CRA and template your React applications. By the end of the book, you will be sufficiently skilled to be able to build faster and effective React apps using CRA. What you will learnBecome familiar with React by building applications with Create React AppMake your frontend development hassle freeCreate interactive UIs exploring the latest features of CRA 2Build modern, React projects with, SASS,and progressive web applicationsDevelop proxy backend servers and simulate interaction with a full backendKeep your application fully tested and maintain confidence in your projectWho this book is for The book is intended for the web developers who want to jump into building great frontend with React using easy templating solutions.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789955668",
          },
          {
            type: "ISBN_10",
            identifier: "1789955661",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 182,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Fs6KDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Fs6KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Fs6KDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=31&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Fs6KDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Fs6KDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2020.15,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2020.15,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Fs6KDwAAQBAJ&rdid=book-Fs6KDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2020150000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2020150000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Fs6KDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book will help you use CRA to write React programs without significant configuration-related difficulties.",
      },
    },
    {
      kind: "books#volume",
      id: "oIx5DwAAQBAJ",
      etag: "o5fNReUnqng",
      selfLink: "https://www.googleapis.com/books/v1/volumes/oIx5DwAAQBAJ",
      volumeInfo: {
        title: "Practical React Native",
        subtitle:
          "Build Two Full Projects and One Full Game using React Native",
        authors: ["Frank Zammetti"],
        publisher: "Apress",
        publishedDate: "2018-11-12",
        description:
          "Discover how to use React Native in the real world, from scratch. This book shows you what React Native has to offer, where it came from, and where it’s going. You'll begin with a solid foundation of practical knowledge, and then build on it immediately by constructing three different apps. You'll learn how to use each feature of React Native by working on two full projects and one full game. These aren’t just simple React Native Hello World examples (although you’ll naturally start there!) but are apps that you can, if you so choose, install on your mobile devices and use for real. Throughout this book, you'll gain real-world familiarity with React Native as well as supporting components from Expo, NativeBase, React Navigation and the Redux and Lodash libraries. You'll also build server-side code for a mobile React Native app to talk to using the popular Node.js and Socket.io library, providing you a holistic view of things even beyond React Native. And, you'll see many helpful tips, tricks and gotchas to watch out for along the way! Practical React Native offers practical exercises that will give you a solid grasp of building apps with React Native, allowing you to springboard into creating more advanced apps on your own.Creating a game with React Native will allow you to see a whole other perspective on what React Native can do. What You'll Learn Master the basics of React Native Create a logically structured project Review interface elements, such as widgets, controls, and extensions Build layouts Work with Expo, an open source toolchain Who This book Is For The primary audience is mobile developers and anyone looking to build for multiple mobile platforms and trying to do so with a codebase that is largely the same across all. Readers will need a decent foundation, but not necessarily be experts in, HTML, CSS, and JavaScript, but I'll assume little beyond that.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781484239391",
          },
          {
            type: "ISBN_10",
            identifier: "1484239393",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 342,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=oIx5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=oIx5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=oIx5DwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=32&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=oIx5DwAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Practical_React_Native.html?hl=&id=oIx5DwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Practical_React_Native-sample-epub.acsm?id=oIx5DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Practical_React_Native-sample-pdf.acsm?id=oIx5DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=oIx5DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Discover how to use React Native in the real world, from scratch. This book shows you what React Native has to offer, where it came from, and where it’s going.",
      },
    },
    {
      kind: "books#volume",
      id: "kc6PDwAAQBAJ",
      etag: "FVixZX69PwA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/kc6PDwAAQBAJ",
      volumeInfo: {
        title: "React Design Patterns and Best Practices",
        subtitle:
          "Design, build and deploy production-ready web applications using standard industry practices, 2nd Edition",
        authors: ["Carlos Santana Roldán"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2019-03-30",
        description:
          "We will be taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that’s for new or already existing projects. It will help you to make your applications more flexible, perform better, and easier to maintain.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789534566",
          },
          {
            type: "ISBN_10",
            identifier: "1789534569",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 338,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=kc6PDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=kc6PDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=kc6PDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=33&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=kc6PDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=kc6PDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 827.17,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 413.58,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=kc6PDwAAQBAJ&rdid=book-kc6PDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 827170000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 413580000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=kc6PDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "We will be taking a complete journey through the most valuable design patterns in React, this book demonstrates how to apply design patterns and best practices in real-life situations, whether that’s for new or already existing projects.",
      },
    },
    {
      kind: "books#volume",
      id: "Tg9QDwAAQBAJ",
      etag: "3W62faWQs6U",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Tg9QDwAAQBAJ",
      volumeInfo: {
        title: "React for Real",
        subtitle: "Front-End Code, Untangled",
        authors: ["Ludovico Fischer"],
        publisher: "Pragmatic Bookshelf",
        publishedDate: "2017-09-06",
        description:
          "When traditional web development techniques don't cut it, try React. Use React to create highly interactive web pages faster and with fewer errors. With a little JavaScript experience under your belt, you'll be up and running in no time creating dynamic web applications. Craft isolated components that make your apps easier to develop and maintain, with plenty of guidance on best practices. Set up automated tests, and make pages render fast for your users. See how to use your React skills to integrate with other front-end technologies when needed. Dive right into React by defining components, the basic building blocks of a React application. Integrate modern JavaScript language features such as classes and arrow functions in your app. Analyze the relationships in your data to isolate state, and sync the data model with what your users see. Once you're familiar with how a React application works, organize your code base with modules. Configure a production build and deliver your app as efficiently as possible with Webpack. Master testing with React-specific advice and tools to catch the most bugs with the least amount of code. Learn the basics of the Redux library. Define actions and manage an immutable central state with reducers, then connect Redux to your React components to build even larger and more complex interfaces. Package your React code as a standalone widget so anyone can use it in their own applications. Reuse existing JavaScript code in your React components, and build a new React view on top of an existing data model shared with a legacy application. When you finish this book, you'll be well on your way to solving your front-end problems with React. What You Need: Node.js 6.x or later, and a modern web browser.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781680504484",
          },
          {
            type: "ISBN_10",
            identifier: "1680504487",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 164,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Tg9QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Tg9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=Tg9QDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=34&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Tg9QDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Tg9QDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 1699.2,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 1699.2,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Tg9QDwAAQBAJ&rdid=book-Tg9QDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 1699200000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 1699200000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Tg9QDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "When you finish this book, you&#39;ll be well on your way to solving your front-end problems with React. What You Need: Node.js 6.x or later, and a modern web browser.",
      },
    },
    {
      kind: "books#volume",
      id: "8RhKDwAAQBAJ",
      etag: "kO0jnVa1ZOA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/8RhKDwAAQBAJ",
      volumeInfo: {
        title: "Progressive Web Apps with React",
        subtitle:
          "Create lightning fast web apps with native power using React and Firebase",
        authors: ["Scott Domes"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2017-10-24",
        description:
          "Enhance the performance of your applications by using React and adding the Progressive web app capability to it About This Book Bring the best of mobile sites and native apps to your users with progressive web applications Create fast, reliable, and engaging PWAs with React and Firebase Create high-performance applications even with low connection speeds by leveraging modern web technologies Who This Book Is For This book is for Javascript Developers who want to develop high performance Web User Interfaces. This book requires basic knowledge of HTML, CSS and JavaScript. What You Will Learn Set up Webpack configuration, as well as get the development server running Learn basic Firebase configuration and deployment Create routes, manage multiple components, and learn how to use React Router v4 to manage the flow of data Use React life cycle methods to load data Add a service worker to the app and learn how it works Use a service worker to send Push Notifications Configure Webpack to split up the JavaScript bundle and lazy load component files Learn how to use the web Cache API to use your app offline Audit PWAs with Google's Lighthouse tool In Detail For years, the speed and power of web apps has lagged behind native applications. Progressive Web Apps (PWAs) aim to solve this by bridging the gap between the web apps and native apps, delivering a host of exciting features. Simultaneously, React is fast becoming the go-to solution for building modern web UIs, combining ease of development with performance and capability. Using React alongside PWA technology will make it easy for you to build a fast, beautiful, and functional web app. After an introduction and brief overview of the goals of PWAs, the book moves on to setting up the application structure. From there, it covers the Webpack build process and the process of creating React components. You'll learn how to set up the backend database and authentication solution to communicate with Firebase and how to work with React Router. Next, you will create and configure your web app manifest, making your PWA installable on mobile devices. Then you'll get introduced to service workers and see how they work as we configure the app to send push notifications using Firebase Cloud Messaging. We'll also explore the App Shell pattern, a key concept in PWAs and look at its advantages regarding efficient performance. Finally, you'll learn how to add offline capabilities to the app with caching and confirm your progress by auditing your PWA with Lighthouse. Also, you'll discover helper libraries and shortcuts that will help you save time and understand the future of PWA development. Style and approach This is a step-by-step book, wherein, you will use the React framework to create a complete progressive web app.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788296137",
          },
          {
            type: "ISBN_10",
            identifier: "1788296133",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 302,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.2.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=8RhKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=8RhKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=8RhKDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=35&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=8RhKDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=8RhKDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 3515.21,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=8RhKDwAAQBAJ&rdid=book-8RhKDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 3515210000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=8RhKDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Enhance the performance of your applications by using React and adding the Progressive web app capability to it About This Book Bring the best of mobile sites and native apps to your users with progressive web applications Create fast, ...",
      },
    },
    {
      kind: "books#volume",
      id: "HAKdjwEACAAJ",
      etag: "UHSHIC8MTCA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/HAKdjwEACAAJ",
      volumeInfo: {
        title: "React Quickly",
        subtitle: "Painless web apps with React, JSX, Redux, and GraphQL",
        authors: ["Azat Mardan"],
        publisher: "Manning",
        publishedDate: "2017-09-28",
        description:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology Successful user interfaces need to be visually interesting, fast, and flowing. The React.js JavaScript library supercharges view-heavy web applications by improving data flow between UI components. React sites update visual elements efficiently and smoothly, minimizing page reloads. React is developer friendly, with a strong ecosystem to support the dev process along the full application stack. And because it's all JavaScript, React is instantly familiar. About the Book React Quickly is the tutorial for web developers who want to get started fast with React.js. Following carefully chosen and clearly explained examples, you'll learn React development using your existing JavaScript and web dev skills. You'll explore a host of different projects as you learn about web components, forms, and data. What's Inside Master React fundamentals Build full web apps with data and routing Test components Optimize React apps About the Reader This book is for developers comfortable building web applications with JavaScript. About the Author Azat Mardan is a Tech Fellow at Capital One with extensive experience using and teaching JavaScript and Node, and author of several books on JavaScript, Node, React, and Express. Table of Contens PART 1 - REACT FOUNDATION Meeting React Baby steps with React Introduction to JSX Making React interactive with states React component lifecycle events Handling events in React Working with forms in React Scaling React components Project: Menu component Project: Tooltip component Project: Timer component PART 2 - REACT ARCHITECTURE The Webpack build tool React routing Working with data using Redux Working with data using GraphQL Unit testing React with Jest React on Node and Universal JavaScript Project: Building a bookstore with React Router Project: Checking passwords with Jest Project: Implementing autocomplete with Jest, Express, and MongoDB APPENDIXES Appendix A - Installing applications used in this book Appendix B - React cheatsheet Appendix C - Express.js cheatsheet Appendix D - MongoDB and Mongoose cheatsheet Appendix E - ES6 for success",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1617293342",
          },
          {
            type: "ISBN_13",
            identifier: "9781617293344",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=HAKdjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=HAKdjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=HAKdjwEACAAJ&dq=react&hl=&cd=36&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=HAKdjwEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/React_Quickly.html?hl=&id=HAKdjwEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=HAKdjwEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.",
      },
    },
    {
      kind: "books#volume",
      id: "ZRLmDwAAQBAJ",
      etag: "WLK/TAJDFOI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ZRLmDwAAQBAJ",
      volumeInfo: {
        title: "Taming the State in React",
        subtitle: "Your journey to master Redux and MobX",
        authors: ["Robin Wieruch"],
        publisher: "Robin Wieruch",
        publishedDate: "2018-05-08",
        description:
          "The book dives deeply into state management in React. You will learn everything about React's local state and state management with Redux and MobX. It comes with a lot of best practices, techniques and concepts. Along the way you will have practical hands on experiences by building own applications. The book turned out to exceed all my expectations. What started as an attempt to write a introductory book about state management in React with Redux, turned out into a full blown 250-page book which showcases MobX as alternative state management library, implements exciting applications along the way and has boilerplate projects to get you started in learning and building applications with these libraries. The bigger idea was to write a book which gives learners a consistent way to study the topic state management. I had the feeling that there exist way too many, partly inconsistent or outdated, tutorials around these topics and it is hard for learners to choose from so many opportunities. I thought, one well structured book should help newcomers to get started easily in the topic of state management with React's local state, Redux and MobX. Afterward, everyone should be on one well set level to build his/her own applications with Redux or MobX. The book teaches you how to use local state in React and scaling React applications with advanced practices, patterns and techniques. Afterward, the ebook dives into learning Redux and MobX as libraries for state management. These libraries are taught from scratch without React but in combination with React later on. However, all these learnings are not necessarily bound to React as view layer library. They can be applied in other view layer (component based) libraries, such as Vue.js, or single page application (SPA) frameworks, such as Angular.js, too. If you are new to React and want to learn React before, I recommend you to read the up to date book The Road to learn React. Due to Redux's popularity, the book teaches more about Redux than MobX. But it is planned to grow the MobX part too, because I am really into that library as well. For both state management libraries, Redux and MobX, you will learn to use them standalone, to connect them to React applications in multiple ways, and to apply best practices, patterns and tricks to scale them in larger applications. You will learn about using JavaScript ES6 to keep your state immutable, middleware in Redux, and flat and normalized state structures. Afterward, the terms actions, reducers, store(s), connected components and so on, will not be foreign subjects to you anymore. After reading the book, I believe you are ready to build your own applications in any (view layer) library or SPA framework of your choice with Redux or MobX. But when using React, you are setup with advanced knowledge about React's local state to use it in larger applications.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781720710769",
          },
          {
            type: "ISBN_10",
            identifier: "1720710767",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 360,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ZRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ZRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=ZRLmDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=37&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ZRLmDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ZRLmDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2146.75,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 2146.75,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ZRLmDwAAQBAJ&rdid=book-ZRLmDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2146750000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 2146750000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ZRLmDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: "The book dives deeply into state management in React.",
      },
    },
    {
      kind: "books#volume",
      id: "l8m8DQAAQBAJ",
      etag: "/FAUHqjVJUs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/l8m8DQAAQBAJ",
      volumeInfo: {
        title: "Learning React",
        subtitle: "Learning React ePub _1",
        authors: ["Kirupa Chinnathambi"],
        publisher: "Addison-Wesley Professional",
        publishedDate: "2016-12-27",
        description:
          "Learning React A hands-on guide to building maintainable, high-performing web application user interfaces using the React JavaScript library As far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier. What React isn’t, though, is beginner-friendly and approachable. Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help you understand the fundamentals of React and how to use it to build really performant (and awesome) apps. Build your first React app Create components to define parts of your UI Combine components into other components to build more complex UIs Use JSX to specify visuals without writing full-fledged JavaScript Deal with maintaining state Work with React’s way of styling content Make sense of the mysterious component lifecycle Build multi-page apps using routing and views Optimize your React workflow using tools such as Node, Babel, webpack, and others Contents at a Glance Chapter 1 Introducing React Chapter 2 Building Your First React App Chapter 3 Components in React Chapter 4 Styling in React Chapter 5 Creating Complex Components Chapter 6 Transferring Properties (Props) Chapter 7 Meet JSX–Again! Chapter 8 Dealing with State Chapter 9 Going from Data to UI Chapter 10 Working with Events Chapter 11 The Component Lifecycle Chapter 12 Accessing DOM Elements Chapter 13 Creating a Single-Page App Using React Router Chapter 14 Building a Todo List App Chapter 15 Setting Up Your React Development Environment Chapter 16 The End Chapter 17 (Web Edition) Working With External Data Chapter 18 (Web Edition) Creating a Sliding Menu Using React Motion Register your book at informit.com/register for free access to the Web Edition and two exclusive bonus chapters.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780134546537",
          },
          {
            type: "ISBN_10",
            identifier: "0134546539",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 240,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=l8m8DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=l8m8DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=l8m8DQAAQBAJ&printsec=frontcover&dq=react&hl=&cd=38&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=l8m8DQAAQBAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Learning_React.html?hl=&id=l8m8DQAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-epub.acsm?id=l8m8DQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Learning_React-sample-pdf.acsm?id=l8m8DQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=l8m8DQAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help you understand the fundamentals of React and how to use it to build really performant (and awesome) apps.",
      },
    },
    {
      kind: "books#volume",
      id: "anteDwAAQBAJ",
      etag: "4X1vwWbJ76A",
      selfLink: "https://www.googleapis.com/books/v1/volumes/anteDwAAQBAJ",
      volumeInfo: {
        title: "Full-Stack React Projects",
        subtitle:
          "Modern web development using React 16, Node, Express, and MongoDB",
        authors: ["Shama Hoque"],
        publisher: "Packt Publishing Ltd",
        publishedDate: "2018-05-29",
        description:
          "Combining React with industry tested server-side technologies such as Node, Express, and MongoDB creates a diverse array of possibilities when developing real-world web applications. This book guides you through setting up for MERN-based web development to building social media, an online marketplace, media streaming, and VR-infused game ...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781788832946",
          },
          {
            type: "ISBN_10",
            identifier: "1788832949",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 460,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.2.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=anteDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=anteDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=anteDwAAQBAJ&printsec=frontcover&dq=react&hl=&cd=39&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=anteDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=anteDwAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 828.35,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 414.18,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=anteDwAAQBAJ&rdid=book-anteDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 828350000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 414180000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=anteDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book guides you through setting up for MERN-based web development to building social media, an online marketplace, media streaming, and VR-infused game .",
      },
    },
    {
      kind: "books#volume",
      id: "00DIzgEACAAJ",
      etag: "EmwHxFE5R9o",
      selfLink: "https://www.googleapis.com/books/v1/volumes/00DIzgEACAAJ",
      volumeInfo: {
        title: "Full-Stack Web Development with GraphQl and React",
        subtitle:
          "Build Scalable Full-Stack Applications with React 18 While Learning to Solve Complex Problems with GraphQl",
        authors: ["Sebastian Grebe"],
        publisher: "Packt Publishing",
        publishedDate: "2022-02-28",
        description:
          "Unleash the power of GraphQL, React 17, Node, and Express to build a scalable and production-ready application from scratch to be deployed on AWS Key Features: Build full-stack applications with modern APIs using GraphQL and React Hooks Integrate Apollo into React and build frontend components using GraphQL Implement a self-updating notification pop-up with a unique GraphQL feature called Subscriptions Book Description: React and GraphQL, when combined, provide you with a very dynamic, efficient, and stable tech stack to build web-based applications. GraphQL is a modern solution for querying an API that represents an alternative to REST and is the next evolution in web development. This book guides you in creating a full-stack web application from scratch using modern web technologies such as Apollo, Express.js, Node.js, and React. First, you'll start by configuring and setting up your development environment. Next, the book demonstrates how to solve complex problems with GraphQL, such as abstracting multi-table database architectures and handling image uploads using Sequelize. You'll then build a complete Graphbook from scratch. While doing so, you'll cover the tricky parts of connecting React to the backend, and maintaining and synchronizing state. In addition to this, you'll also learn how to write Reusable React components and use React Hooks. Later chapters will guide you through querying data and authenticating users in order to enable user privacy. Finally, you'll explore how to deploy your application on AWS and ensure continuous deployment using Docker and CircleCI. By the end of this web development book, you'll have learned how to build and deploy scalable full-stack applications with ease using React and GraphQL. What You Will Learn: Build a GraphQL API by implementing models and schemas with Apollo and Sequelize Set up an Apollo Client and build frontend components using React Write Reusable React components and use React Hooks Authenticate and query user data using GraphQL Use Mocha to write test cases for your full-stack application Deploy your application to AWS using Docker and CircleCI Who this book is for: This React GraphQL book is for web developers familiar with React and GraphQL who want to enhance their skills and build full-stack applications using industry standards like React, Apollo, Node.js, and SQL at scale while learning to solve complex problems with GraphQL.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1801077886",
          },
          {
            type: "ISBN_13",
            identifier: "9781801077880",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 472,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=00DIzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=00DIzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=00DIzgEACAAJ&dq=react&hl=&cd=40&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=00DIzgEACAAJ&dq=react&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Full_Stack_Web_Development_with_GraphQl.html?hl=&id=00DIzgEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=00DIzgEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This guide to React and GraphQL will help developers working with web-based technologies put their knowledge to work.",
      },
    },
  ]);
  // console.log(searchTerm);

  // useEffect(() => {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Check if the data.items property exists and is an array
  //       if (data.items && Array.isArray(data.items)) {
  //         setFilterBooks(data.items);
  //         setBooks(data.items);
  //         setLoading(false);
  //       } else {
  //         throw new Error("Invalid data format received from the API");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("(In use effect filter");
  //   const filteredList = books.filter((book) =>
  //     book.volumeInfo.title
  //       .toLocaleLowerCase()
  //       .includes(searchTerm.toLocaleLowerCase())
  //   );
  //   setFilterBooks(filteredList);
  // }, [searchTerm]);

  useEffect(() => {
    const filteredList = books.filter((book) => {
      const titleMatch = book.volumeInfo.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
      const authorMatch = book.volumeInfo.authors
        ? book.volumeInfo.authors.some((author) =>
            author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
        : false;
      const categoryMatch = book.volumeInfo.categories
        ? book.volumeInfo.categories.some((category) =>
            category
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          )
        : false;
      return titleMatch || authorMatch || categoryMatch;
    });
    setFilterBooks(filteredList);
  }, [searchTerm, books]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-wrapper">
      <div className="pt-4 max-w-md border-rounded mx-auto ">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
          className="search-input w-full px-4 py-2"
        />
      </div>
      <ul className="sm:pt-5 py-16 flex gap-5 flex-wrap justify-center m-2">
        {filterBooks.map((book) => (
          <li
            key={book.id}
            className="card shadow-md rounded-md p-2  h-50 md:grid-cols-2 md:items-center"
          >
            <div>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className="h-40 p-6 md:grid-cols-2 md:items-center"
              />
            </div>
            <div className="cursor-pointer">
              <Link to={`/book/${book.id}`}>
                <div className="text-bold p-1 flex hover:bg-black hover:text-white hover:rounded-lg">
                  <b className="sub-heads">Title:</b>
                  <span className="card-val">{book.volumeInfo.title}</span>
                </div>
              </Link>
              <div className="flex">
                <b className="sub-heads"> Author:</b>
                <span className="card-val">
                  {book.volumeInfo.authors &&
                    book.volumeInfo.authors.join(", ")}
                </span>
              </div>
              <p className="flex">
                <b className="sub-heads"> Genre:</b>{" "}
                <span className="card-val">
                  {book.volumeInfo.categories &&
                    book.volumeInfo.categories.join(", ")}
                </span>
              </p>
              <div className="flex">
                <b className="sub-heads"> Price $ :</b>

                {book.saleInfo && book.saleInfo.listPrice && (
                  <span className="card-val">
                    {book.saleInfo.listPrice.amount}{" "}
                    {book.saleInfo.listPrice.currencyCode}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
