class SmallestIntegerFinder {
	findSmallestInt (args) {
		var int = args[0];
		for (var i = 0; i < args.length; i++) {
			if (args[i] <= int) {
				int = args[i];
			}
		} 
		return (int); 
	}
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
  }
}

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b)=>a-b)[0];
//   }
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

