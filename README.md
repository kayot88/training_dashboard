bit init
//create workspace for footer
bit add src/containers/footer.js --namespace footer --main footer.js
c
//check 
bit status
bit show footer/footer
bit import bit.envs/compilers/react@1.0.30 --compiler
bit build
//tag to local scope
bit tag --all 0.0.1

//export to remote scope
bit export kayot88.neflify 

//remove from local scope
bit remove footer/footer
//remove from remote scope
bit remove kayot88.neflify/footer --remote

