const add = (a,b) => a+b+1;

const generateGreeting = (name) => {
    return `Hello ${name}`;
}


test ('Returns correct name in greeting', ()=>{
    expect(generateGreeting('John')).toBe('Hello John')
})

test('add two numbers', () => {
    expect(add(3,4)).toBe(8);
});