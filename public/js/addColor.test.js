const { addColor } = require('./code.js');

test('addColor updates DOM on successful API response', () => {
    // Setup fake DOM
    document.body.innerHTML = `
        <input id="colorText" value="blue" />
        <div id="colorAddResult"></div>
    `;

    // Mock global vars used by addColor()
    global.userId = 123;
    global.urlBase = "http://example.com/LAMPAPI";
    global.extension = "php";

    // Mock XMLHttpRequest
    const mockXHR = {
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        send: jest.fn(function () {
            // Simulate server response
            this.readyState = 4;
            this.status = 200;
            this.onreadystatechange();
        }),
        onreadystatechange: null
    };

    global.XMLHttpRequest = jest.fn(() => mockXHR);

    // Act
    addColor();

    // Assert
    expect(document.getElementById("colorAddResult").innerHTML)
        .toBe("Color has been added");
});