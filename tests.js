// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });

});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when input is Jane', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, World!"  when input is invalid', function () {
        expect(sayHello(null)).toBe("Hello, World!");
        expect(sayHello("")).toBe("Hello, World!");
        expect(sayHello(2.3)).toBe("Hello, World!");
        expect(sayHello("5")).toBe("Hello, World!");
        expect(sayHello([])).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5 or "5"', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive("5")).toBe(true);
    });
})

    describe('isEven', function() {
        it('should be a defined function', function () {
            expect(typeof isEven).toBe('function');
        });
        it('should return a boolean', function () {
            expect(typeof isEven()).toBe('boolean');
        });
        it('should return a true if x is NOT even', function () {
            expect(isEven(2)).toBe(true);
            expect(isEven(-4)).toBe(true);
        });
        it('should return a false if x is even', function () {
            expect(isEven(3)).toBe(false);
            expect(isEven("banana")).toBe(false);
            expect(isEven(Infinity)).toBe(false);
            expect(isEven(true)).toBe(false);
            expect(isEven(false)).toBe(false);
        })
    })

