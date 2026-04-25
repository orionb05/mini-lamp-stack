const { searchColor } = require('./code.js');

test('searchColor parses API-like JSON and updates DOM', () => {
    document.body.innerHTML = `
        <input id="searchText" value="re" />
        <div id="colorSearchResult"></div>
        <p></p>
    `;

    global.userId = 42;
    global.urlBase = "http://example.com/LAMPAPI";
    global.extension = "php";

    const mockXHR = {
        open: jest.fn(),
        setRequestHeader: jest.fn(),

        send: jest.fn(function () {
            this.readyState = 4;
            this.status = 200;
            this.responseText = JSON.stringify({
                results: ["red", "green"],
                error: ""
            });
            this.onreadystatechange();
        }),
        onreadystatechange: null
    };

    global.XMLHttpRequest = jest.fn(() => mockXHR);

    searchColor();

    expect(document.getElementById("colorSearchResult").innerHTML).toBe("Color(s) has been retrieved");

    const p = document.querySelector("p");
    expect(p.querySelectorAll("br").length).toBe(1);
    const text = p.textContent.replace(/\s+/g, "");
    expect(text).toBe("redgreen");
});