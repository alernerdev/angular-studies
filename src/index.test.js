import { expect } from 'chai';
//import jsdom from 'jsdom/lib/old-api';
//import fs from 'fs';

describe('my first test', function() {
    it('should pass', function() {
        expect(true).to.equal(true);
    });
});
/*
describe('index.html', function() {
    it('should say hello', function(done) {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            done();
            window.close();
        });
    });
});
*/