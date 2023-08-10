function isBalanced(str) {
    const stack = [];
    const opening = '({[';
    const closing = ')}]';

    for (let char of str) {
        if (opening.includes(char)) {
            stack.push(char); // Push the opening parenthesis onto the stack
        } else if (closing.includes(char)) {
            const openingBracket = opening[closing.indexOf(char)]; // Find the corresponding opening parenthesis
            if (stack.length === 0 || stack.pop() !== openingBracket) {
                return false; // If not found or no match, string is unbalanced
            }
        }
    }

    return stack.length === 0; // If the stack has elements, the string is unbalanced
}

function testCases(input) {
    const lines = input.trim().split('\n');
    const numTestCases = parseInt(lines[0]);
    const testCases = lines.slice(1);

    const results = [];
    for (let i = 0; i < numTestCases; i++) {
        results.push(isBalanced(testCases[i]) ? 'true' : 'false');
    }

    return results;
}

const input = `
5
( )
{ [ ( ) ] }
{ [ ( ) } ]
( ) (
] ( ) [
`;

const output = testCases(input).join('\n');
console.log(output);