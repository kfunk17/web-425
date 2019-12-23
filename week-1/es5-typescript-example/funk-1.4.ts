/*
 *  Title:  funk-1.4.ts
 *  Author: Karie Funk
 *  Date:   22 Dec 2019
 *  Description: Building an Angular application without Angular CLI
 */

// Variables
let firstName: string = "Karie";
let lastName: string = "Funk";

// whoami function
function myName(firstName: string, lastName: string): string {
	return 'Hello ' + firstName + ' ' + lastName;
}

// Output message to the console
console.log(myName(firstName, lastName));