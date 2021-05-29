#! /usr/bin/env node
const states = require("../util/states");
const district = require("../util/district");
const slots = require("../util/slots");


const { program } = require("commander");

program
  .command('states')
  .description('Listing all the states')
  .action(states);
program
  .command('district <stateid>')
  .description('Listing all the Districts')
  .action(district);
program
  .command('slots <districtid>')
  .description('Get all Slots for District id')
  .action(slots);

program.parse();