fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch articles. Status: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (data.articles && data.articles.length > 0) {
            const articles = data.articles;
            const articlesContainer = document.getElementById("articles");
            articles.forEach(article => {
                const articleDiv = document.createElement("div");
                articleDiv.classList.add("article");

                const title = document.createElement("h2");
                title.textContent = article.title;
                
                const image = document.createElement("img");
                image.src = article.urlToImage;
                image.alt = article.title;
                
                const description = document.createElement("p");
                description.textContent = article.description;
                
                const source = document.createElement("p");
                source.textContent = `Source: ${article.source.name}`;
                
                const publishedAt = document.createElement("p");
                publishedAt.textContent = `Published At: ${new Date(article.publishedAt).toLocaleString()}`;
                
                articleDiv.appendChild(title);
                articleDiv.appendChild(image);
                articleDiv.appendChild(description);
                articleDiv.appendChild(source);
                articleDiv.appendChild(publishedAt);
                
                articlesContainer.appendChild(articleDiv);
            });
        } else {
            throw new Error("No articles found.");
        }
    })
    .catch(error => {
        console.error("Error fetching articles:", error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Error fetching articles. Please try again later.";
        document.getElementById("articles").appendChild(errorMessage);
    });