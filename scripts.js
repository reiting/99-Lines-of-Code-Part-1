var friends = ['Wayne', 'Connie', 'Kwinn', 'Sarah', 'Davida'];

for (n = 0; n < friends.length; n++) {
    console.log(friends[n] + ":");
    for(i = 99; i > 0; i--) {
        if (i == 1) {
            console.log (i + " line of code in the file,", + i + " line of code; " + friends[n] + " strikes one out, clears it all out, no more lines of code in the file.");
        } else if (i-1 == 1) {
            console.log(i + " lines of code in the file,", + i + " lines of code; " + friends[n] + " strikes one out, clears it all out, " + [i-1] + " line of code in the file.");
    } else {
            console.log(i + " lines of code in the file,", + i + " lines of code; " + friends[n] + " strikes one out, clears it all out, " + [i-1] + " lines of code in the file.");
        }   
};
};