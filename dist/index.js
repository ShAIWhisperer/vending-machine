"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const vending_machine_1 = require("./vending-machine");
const readline = __importStar(require("readline"));
const initialProducts = [
    { id: 'A1', name: 'Soda', price: 125, quantity: 10 },
    { id: 'B1', name: 'Chips', price: 100, quantity: 5 },
    { id: 'C1', name: 'Candy', price: 65, quantity: 20 },
];
const vm = new vending_machine_1.VendingMachine(initialProducts);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function prompt() {
    rl.question('> ', (input) => {
        const tokens = input.trim().split(' ');
        const command = tokens[0].toLowerCase();
        switch (command) {
            case 'insert': {
                const coin = parseInt(tokens[1], 10);
                if (isNaN(coin)) {
                    console.log('Invalid coin value.');
                }
                else {
                    vm.insertCoin(coin);
                }
                break;
            }
            case 'select': {
                const productId = tokens[1];
                vm.selectProduct(productId);
                break;
            }
            case 'display': {
                vm.displayProducts();
                break;
            }
            case 'refund': {
                vm.refund();
                break;
            }
            case 'exit': {
                rl.close();
                return;
            }
            default:
                console.log('Unknown command. Use: insert <coin>, select <productId>, display, refund, or exit.');
        }
        prompt();
    });
}
console.log("Welcome to the Vending Machine!");
vm.displayProducts();
prompt();
