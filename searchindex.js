Object.assign(window.search, {"doc_urls":["introduction.html#introduction","tutorial.html#tutorial","tutorial/gas-optimizations.html#gas-optimizations","tutorial/gas-optimizations.html#1-do-not-use-","styles/index.html#styles","examples.html#examples","cli.html#command-line-tool","stability.html#stability","security.html#security","security.html#mapping-of-instructions","security.html#type-conversions","security.html#stack-operations","security.html#memory-operations","benchmarks.html#benchmarks","contributing.html#contributing","appendix/index.html#appendix","appendix/operators.html#operators"],"index":{"documentStore":{"docInfo":{"0":{"body":58,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":2,"title":1},"10":{"body":20,"breadcrumbs":3,"title":2},"11":{"body":1,"breadcrumbs":3,"title":2},"12":{"body":46,"breadcrumbs":3,"title":2},"13":{"body":0,"breadcrumbs":2,"title":1},"14":{"body":0,"breadcrumbs":2,"title":1},"15":{"body":0,"breadcrumbs":2,"title":1},"16":{"body":8,"breadcrumbs":3,"title":1},"2":{"body":0,"breadcrumbs":5,"title":2},"3":{"body":45,"breadcrumbs":5,"title":2},"4":{"body":0,"breadcrumbs":2,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":0,"breadcrumbs":6,"title":3},"7":{"body":7,"breadcrumbs":2,"title":1},"8":{"body":0,"breadcrumbs":2,"title":1},"9":{"body":0,"breadcrumbs":3,"title":2}},"docs":{"0":{"body":"Zink is a powerful toolchain revolutionizing smart contract development on Ethereum, it is designed to bridge the gap between WebAssembly and the Ethereum Virtual Machine. At its core, zinkc , the Zink compiler, takes WASM bytecode as the source code and transforms it into EVM bytecode for seamless execution on the Ethereum blockchain. This optimization ensures efficient and reliable execution of smart contracts on Ethereum. This guide is intended to serve a number of purposes and within you'll find: The rustdocs of the zink project ...and more! The source for this guide lives on GitHub and contributions are welcome!","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Tutorial » Tutorial","id":"1","title":"Tutorial"},"10":{"body":"WASM have i32, i64, f32, f64 as number types while EVM bytecode only supports arithmetic operations for 256-bits integers. TODO: Add more risk conditions.","breadcrumbs":"Security » Type Conversions","id":"10","title":"Type Conversions"},"11":{"body":"TBA","breadcrumbs":"Security » Stack Operations","id":"11","title":"Stack Operations"},"12":{"body":"The memory related operations in WASM are dangerous for Zink's implementation. WASM is using 32-bits offsets from the MVP spec while EVM is using 256-bits offsets, so it may cause memory overwrite problems. The instructions need to be checked: i32.store i64.store f32.store f64.store i32.store8 i64.store8 i32.store16 i64.store16 memory.size memory.grow TODO: check if it is possible to manage this issue with handling memory.size and memory.grow in a proper way.","breadcrumbs":"Security » Memory Operations","id":"12","title":"Memory Operations"},"13":{"body":"","breadcrumbs":"Benchmarks » Benchmarks","id":"13","title":"Benchmarks"},"14":{"body":"","breadcrumbs":"Contributing » Contributing","id":"14","title":"Contributing"},"15":{"body":"","breadcrumbs":"Appendix » Appendix","id":"15","title":"Appendix"},"16":{"body":"TODO: Add tables WASM operators VS EVM operators","breadcrumbs":"Appendix » A - Operators » Operators","id":"16","title":"Operators"},"2":{"body":"","breadcrumbs":"Tutorial » Gas Optimizations » Gas Optimizations","id":"2","title":"Gas Optimizations"},"3":{"body":"Since EVM opcodes don't have NE, != means Opcode::EQ + Opcode::ISZERO, if it is possible to use == instead, never try !=.S OPCODE NAME MINIMUM GAS STACK INPUT STACK OUTPUT DESCRIPTION 0x14 EQ 3 a b a == b Equality comparison 0x15 ISZERO 3 a a == 0 Simple not operator // `==` costs 3 in total\nEQ // 3 // `!=` costs in total\nEQ // 3\nNOT // 2","breadcrumbs":"Tutorial » Gas Optimizations » 1. Do not use !=","id":"3","title":"1. Do not use !="},"4":{"body":"","breadcrumbs":"Styles » Styles","id":"4","title":"Styles"},"5":{"body":"","breadcrumbs":"Examples » Examples","id":"5","title":"Examples"},"6":{"body":"","breadcrumbs":"Command Line Tool » Command Line Tool","id":"6","title":"Command Line Tool"},"7":{"body":"This project is still under development, please DO NOT use it in production.","breadcrumbs":"Stability » Stability","id":"7","title":"Stability"},"8":{"body":"","breadcrumbs":"Security » Security","id":"8","title":"Security"},"9":{"body":"","breadcrumbs":"Security » Mapping of Instructions","id":"9","title":"Mapping of Instructions"}},"length":17,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"3":{"tf":1.0}},"x":{"1":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"2":{"5":{"6":{"df":2,"docs":{"10":{"tf":1.0},"12":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"12":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":2.23606797749979}}},"a":{"d":{"d":{"df":2,"docs":{"10":{"tf":1.0},"16":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}}},"b":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"12":{"tf":1.4142135623730951}}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"10":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"12":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"14":{"tf":1.0}}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"d":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"q":{"df":1,"docs":{"3":{"tf":1.7320508075688772}},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":2.0}}}}}}}}},"v":{"df":0,"docs":{},"m":{"df":5,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"12":{"tf":1.0},"16":{"tf":1.0},"3":{"tf":1.0}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"f":{"3":{"2":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"a":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"3":{"2":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}},"e":{"1":{"6":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}},"e":{"1":{"6":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"n":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"12":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"10":{"tf":1.0}}},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"12":{"tf":1.0}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}},"y":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}}}},"s":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"10":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"d":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"10":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}}}}},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{":":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"3":{"tf":1.0}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.4142135623730951},"16":{"tf":1.7320508075688772},"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"10":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"11":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"b":{"a":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":3,"docs":{"10":{"tf":1.0},"12":{"tf":1.0},"16":{"tf":1.0}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"6":{"tf":1.0}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":3,"docs":{"12":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"7":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":1,"docs":{"16":{"tf":1.0}}}},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":4,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"12":{"tf":1.4142135623730951},"16":{"tf":1.0}}}},"y":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"'":{"df":1,"docs":{"12":{"tf":1.0}}},"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"3":{"tf":1.0}},"x":{"1":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"1":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"2":{"5":{"6":{"df":2,"docs":{"10":{"tf":1.0},"12":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"3":{"2":{"df":1,"docs":{"12":{"tf":1.0}}},"df":1,"docs":{"3":{"tf":2.23606797749979}}},"a":{"d":{"d":{"df":2,"docs":{"10":{"tf":1.0},"16":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":2,"docs":{"15":{"tf":1.7320508075688772},"16":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}}},"b":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"10":{"tf":1.0},"12":{"tf":1.4142135623730951}}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"10":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"12":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"14":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"d":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"q":{"df":1,"docs":{"3":{"tf":1.7320508075688772}},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":2.0}}}}}}}}},"v":{"df":0,"docs":{},"m":{"df":5,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"12":{"tf":1.0},"16":{"tf":1.0},"3":{"tf":1.0}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"f":{"3":{"2":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"a":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"3":{"2":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}},"e":{"1":{"6":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}},"e":{"1":{"6":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"8":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"n":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"12":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"10":{"tf":1.0}}},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"12":{"tf":1.0}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":2.0}}},"y":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}}}},"s":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"10":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"d":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"10":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}}}}},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{":":{":":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"3":{"tf":1.0}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"10":{"tf":1.0},"11":{"tf":1.4142135623730951},"12":{"tf":1.7320508075688772},"16":{"tf":2.23606797749979},"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"12":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"10":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":5,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"8":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}},"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"b":{"a":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":3,"docs":{"10":{"tf":1.0},"12":{"tf":1.0},"16":{"tf":1.0}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":3,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":3,"docs":{"12":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"7":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":1,"docs":{"16":{"tf":1.0}}}},"w":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"m":{"df":4,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"12":{"tf":1.4142135623730951},"16":{"tf":1.0}}}},"y":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"'":{"df":1,"docs":{"12":{"tf":1.0}}},"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}}},"title":{"root":{"1":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"g":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"16":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});