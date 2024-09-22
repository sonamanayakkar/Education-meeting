const onSearch = () => {
    const input = document.querySelector(".search");
    const filter = input.value.toUpperCase();
    const titles = document.querySelectorAll(" h1");

    titles.forEach((title) => {
        const text = title.textContent.toUpperCase();
        title.style.display = text.includes(filter) ? "" : "none";
    });
};

// Add event listener
document.querySelector(".search").addEventListener("input", onSearch);