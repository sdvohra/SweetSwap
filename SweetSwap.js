/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var main = new UI.Card({
  title: 'SweetSwap',
  // icon: 'images/menu_icon.png',
  // subtitle: 'Hello World!',
  body: 'Press \'select\' to get started!'
});

var cookieMenu = new UI.Menu({
  sections: [{
      items: [{
        title: 'Chocolate Chip',
        // icon: 'images/menu_icon.png',
        // subtitle: 'Can do Menus'
      }, {
        title: 'Macadamia Nut',
        // subtitle: 'Subtitle Text'
      }]
    }]
});

var frozenMenu = new UI.Menu({
  sections: [{
      items: [{
        title: 'Vanilla Ice Cream',
        // icon: 'images/menu_icon.png',
        // subtitle: 'Can do Menus'
      }, {
        title: 'Neopolitan Ice Cream',
        // subtitle: 'Subtitle Text'
      }, {
        title: 'Fruit Sherbet',
        // subtitle: 'Subtitle Text'
      }]
    }]
});

var otherMenu = new UI.Menu({
  sections: [{
      items: [{
        title: 'Brownies',
        // icon: 'images/menu_icon.png',
        // subtitle: 'Can do Menus'
      }]
    }]
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Cakes',
        // icon: 'images/menu_icon.png',
        // subtitle: 'Can do Menus'
      }, {
        title: 'Cookies',
        // subtitle: 'Subtitle Text'
      }, {
        title: 'Frozen',
        // subtitle: 'Subtitle Text'
      }, {
        title: 'Other',
        // subtitle: 'Subtitle Text'
      }]
    }]
  });
  
  menu.on('select', function(e) {
    if (e.itemIndex === 0) {
      var cake1 = new UI.Menu({
        sections: [{
          items: [{
            title: 'Vanilla Cake',
            // icon: 'images/menu_icon.png',
            // subtitle: 'Can do Menus'
          }]
        }]
      });
      cake1.on('select', function(e){
        var recipe1 = new UI.Menu({
        sections: [{
          title: "Ingredients",
          items: [{
            title: 'Milk*',
            // icon: 'images/menu_icon.png',
            // subtitle: 'Can do Menus'
          }, {
            title: 'Butter*',
            // subtitle: 'Subtitle Text'
          }, {
            title: 'Eggs*',
            // subtitle: 'Subtitle Text'
          }, {
            title: 'Vanilla Extract',
            // subtitle: 'Subtitle Text'
          }, {
            title: 'All-Purpose Flour',
          }, {
            title: 'Baking Powder',
          }, {
            title: 'White Sugar',
          }]
        }]
      });
        recipe1.on('select', function(e){
          if(e.itemIndex === 1){            // Eliminate butter
            var Butter = new UI.Menu({
            sections: [{
              title: "Swap with...",
              items: [{
                title: 'Margarine',
                // icon: 'images/menu_icon.png',
                // subtitle: 'Can do Menus'
                }, {
                  title: 'Vegetable Shortening',
                  // subtitle: 'Subtitle Text'
                }]
              }]
            });
            Butter.on('select', function(e){
              if (e.itemIndex === 0) {
                  var Marg = new UI.Menu({
                    sections: [{
                      title: "Recipe (Margarine)",
                      items: [{
                        title: "Ingredients",
                        subtitle: "Sugar (1 cup)\nMargarine (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)"
                      }, {
                        title: "Step 1:",
                        subtitle: "Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."
                      }, {
                        title: "Step 2:",
                        subtitle: "In a medium bowl, cream together the sugar and margarine."
                      }, {
                        title: "Step 3:",
                        subtitle: "Beat in the eggs, one at a time; then, stir in the vanilla."
                      }, {
                        title: "Step 4:",
                        subtitle: "Combine flour and baking powder, add to the creamed mixture, and stir well."
                      }, { 
                        title: "Step 5:",
                        subtitle: "Stir in the milk until batter is smooth."  
                      }, {
                        title: "Step 6:",
                        subtitle: "Pour or spoon batter into prepared pan."
                      }, {
                        title: "Step 7:",
                        subtitle: "Bake for 30-40 minutes in the preheated oven."
                      }]
                    }]
                  });
                Marg.show(); 
                Marg.on('select', function(e){
                  if (e.itemIndex === 0) {
                    var Ingredients = new UI.Card({
                      title: 'Ingredients',
                      body: 'Sugar (1 cup)\nMargarine (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)',
                      scrollable: true
                    });
                     Ingredients.show();              
                  } else if (e.itemIndex === 1) {
                    var s1 = new UI.Card({
                      title: 'Step 1',
                      body: 'Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
                      scrollable: true
                    });
                    s1.show();
                  } else if (e.itemIndex === 2) {
                    var s2 = new UI.Card({
                      title: 'Step 2',
                      body: 'In a medium bowl, cream together the sugar and margarine.',
                      scrollable: true
                    });
                    s2.show();
                  } else if (e.itemIndex === 3) {
                    var s3 = new UI.Card({
                      title: 'Step 3',
                      body: 'Beat in the eggs, one at a time; then, stir in the vanilla.',
                      scrollable: true
                    });
                    s3.show();
                  } else if (e.itemIndex === 4) {
                    var s4 = new UI.Card({
                      title: 'Step 4',
                      body: 'Combine flour and baking powder, add to the creamed mixture, and stir well.',
                      scrollable: true
                    });
                    s4.show();
                  } else if (e.itemIndex === 5) {
                    var s5 = new UI.Card({
                      title: 'Step 5',
                      body: 'Stir in the milk until batter is smooth.',
                      scrollable: true
                    });
                    s5.show();
                  } else if (e.itemIndex === 6) {
                    var s6 = new UI.Card({
                      title: 'Step 6',
                      body: 'Pour or spoon batter into prepared pan.',
                      scrollable: true
                    });
                    s6.show();
                  } else if (e.itemIndex === 7) {
                    var s7 = new UI.Card({
                      title: 'Step 7',
                      body: 'Bake for 30-40 minutes in the preheated oven.',
                      scrollable: true
                    });
                    s7.show();
                  }
            });             
              } else if (e.itemIndex === 1) {
                var VShort = new UI.Menu({
                    sections: [{
                      title: "Recipe (Vegetable Shortening)",
                      items: [{
                        title: "Ingredients",
                        subtitle: "Sugar (1 cup)\nVegetable Shortening (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)"
                      }, {
                        title: "Step 1:",
                        subtitle: "Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."
                      }, {
                        title: "Step 2:",
                        subtitle: "In a medium bowl, cream together the sugar and vegetable shortening."
                      }, {
                        title: "Step 3:",
                        subtitle: "Beat in the eggs, one at a time; then, stir in the vanilla."
                      }, {
                        title: "Step 4:",
                        subtitle: "Combine flour and baking powder, add to the creamed mixture, and stir well."
                      }, { 
                        title: "Step 5:",
                        subtitle: "Stir in the milk until batter is smooth."  
                      }, {
                        title: "Step 6:",
                        subtitle: "Pour or spoon batter into prepared pan."
                      }, {
                        title: "Step 7:",
                        subtitle: "Bake for 30-40 minutes in the preheated oven."
                      }]
                    }]
                  });
                VShort.show(); 
                VShort.on('select', function(e){
                  if (e.itemIndex === 0) {
                    var Ingredients = new UI.Card({
                      title: 'Ingredients',
                      body: 'Sugar (1 cup)\nVegetable Shortening (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)',
                      scrollable: true
                    });
                     Ingredients.show();              
                  } else if (e.itemIndex === 1) {
                    var s1 = new UI.Card({
                      title: 'Step 1',
                      body: 'Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
                      scrollable: true
                    });
                    s1.show();
                  } else if (e.itemIndex === 2) {
                    var s2 = new UI.Card({
                      title: 'Step 2',
                      body: 'In a medium bowl, cream together the sugar and vegetable shortening.',
                      scrollable: true
                    });
                    s2.show();
                  } else if (e.itemIndex === 3) {
                    var s3 = new UI.Card({
                      title: 'Step 3',
                      body: 'Beat in the eggs, one at a time; then, stir in the vanilla.',
                      scrollable: true
                    });
                    s3.show();
                  } else if (e.itemIndex === 4) {
                    var s4 = new UI.Card({
                      title: 'Step 4',
                      body: 'Combine flour and baking powder, add to the creamed mixture, and stir well.',
                      scrollable: true
                    });
                    s4.show();
                  } else if (e.itemIndex === 5) {
                    var s5 = new UI.Card({
                      title: 'Step 5',
                      body: 'Stir in the milk until batter is smooth.',

                      scrollable: true
                    });
                    s5.show();
                  } else if (e.itemIndex === 6) {
                    var s6 = new UI.Card({
                      title: 'Step 6',
                      body: 'Pour or spoon batter into prepared pan.',
                      scrollable: true
                    });
                    s6.show();
                  } else if (e.itemIndex === 7) {
                    var s7 = new UI.Card({
                      title: 'Step 7',
                      body: 'Bake for 30-40 minutes in the preheated oven.',
                      scrollable: true
                    });
                    s7.show();
                  }
            });   
              }
            });
            Butter.show();
          } else if(e.itemIndex === 2){
            var Eggs = new UI.Menu({
            sections: [{
              title: "Swap with...",
              items: [{
                title: 'Yogurt',
                // icon: 'images/menu_icon.png',
                // subtitle: 'Can do Menus'
              }, {
                title: 'Pureed Banana',
                // subtitle: 'Subtitle Text'
              }]
            }]
          });
            Eggs.on('select', function(e){
              if (e.itemIndex === 0) {
                  var Yogurt = new UI.Menu({
                    sections: [{
                      title: "Recipe (Yogurt)",
                      items: [{
                        title: "Ingredients",
                        subtitle: "Sugar (1 cup)\nUnsalted butter (½ cup)\nYogurt (½ cup)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)"
                      }, {
                        title: "Step 1:",
                        subtitle: "Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."
                      }, {
                        title: "Step 2:",
                        subtitle: "In a medium bowl, cream together the sugar and butter."
                      }, {
                        title: "Step 3:",
                        subtitle: "Beat in the yogurt, one at a time; then, stir in the vanilla."
                      }, {
                        title: "Step 4:",
                        subtitle: "Combine flour and baking powder, add to the creamed mixture, and stir well."
                      }, { 
                        title: "Step 5:",
                        subtitle: "Stir in the milk until batter is smooth."  
                      }, {
                        title: "Step 6:",
                        subtitle: "Pour or spoon batter into prepared pan."
                      }, {
                        title: "Step 7:",
                        subtitle: "Bake for 30-40 minutes in the preheated oven."
                      }]
                    }]
                  });
                Yogurt.show(); 
                Yogurt.on('select', function(e){
                  if (e.itemIndex === 0) {
                    var Ingredients = new UI.Card({
                      title: 'Ingredients',
                      body: 'Sugar (1 cup)\nUnsalted butter (½ cup)\nYogurt (½ cup)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)',
                      scrollable: true
                    });
                     Ingredients.show();              
                  } else if (e.itemIndex === 1) {
                    var s1 = new UI.Card({
                      title: 'Step 1',
                      body: 'Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
                      scrollable: true
                    });
                    s1.show();
                  } else if (e.itemIndex === 2) {
                    var s2 = new UI.Card({
                      title: 'Step 2',
                      body: 'In a medium bowl, cream together the sugar and butter.',
                      scrollable: true
                    });
                    s2.show();
                  } else if (e.itemIndex === 3) {
                    var s3 = new UI.Card({
                      title: 'Step 3',
                      body: 'Beat in the yogurt, one at a time; then, stir in the vanilla.',
                      scrollable: true
                    });
                    s3.show();
                  } else if (e.itemIndex === 4) {
                    var s4 = new UI.Card({
                      title: 'Step 4',
                      body: 'Combine flour and baking powder, add to the creamed mixture, and stir well.',
                      scrollable: true
                    });
                    s4.show();
                  } else if (e.itemIndex === 5) {
                    var s5 = new UI.Card({
                      title: 'Step 5',
                      body: 'Stir in the milk until batter is smooth.',
                      scrollable: true
                    });
                    s5.show();
                  } else if (e.itemIndex === 6) {
                    var s6 = new UI.Card({
                      title: 'Step 6',
                      body: 'Pour or spoon batter into prepared pan.',
                      scrollable: true
                    });
                    s6.show();
                  } else if (e.itemIndex === 7) {
                    var s7 = new UI.Card({
                      title: 'Step 7',
                      body: 'Bake for 30-40 minutes in the preheated oven.',
                      scrollable: true
                    });
                    s7.show();
                  }
            });
              } else if (e.itemIndex === 1) {
                  var Banana = new UI.Menu({
                    sections: [{
                      title: "Recipe (Banana)",
                      items: [{
                        title: "Ingredients",
                        subtitle: "Sugar (1 cup)\nUnsalted butter (½ cup)\nBanana (½ cup)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)"
                      }, {
                        title: "Step 1:",
                        subtitle: "Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."
                      }, {
                        title: "Step 2:",
                        subtitle: "In a medium bowl, cream together the sugar and butter."
                      }, {
                        title: "Step 3:",
                        subtitle: "Beat in the bananas, one at a time; then, stir in the vanilla."
                      }, {
                        title: "Step 4:",
                        subtitle: "Combine flour and baking powder, add to the creamed mixture, and stir well."
                      }, { 
                        title: "Step 5:",
                        subtitle: "Stir in the milk until batter is smooth."  
                      }, {
                        title: "Step 6:",
                        subtitle: "Pour or spoon batter into prepared pan."
                      }, {
                        title: "Step 7:",
                        subtitle: "Bake for 30-40 minutes in the preheated oven."
                      }]
                    }]
                  });
                Banana.show(); 
                Banana.on('select', function(e){
                  if (e.itemIndex === 0) {
                    var Ingredients = new UI.Card({
                      title: 'Ingredients',
                      body: 'Sugar (1 cup)\nUnsalted butter (½ cup)\nBanana (½ cup)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nMilk (¾ cups)',
                      scrollable: true
                    });
                     Ingredients.show();              
                  } else if (e.itemIndex === 1) {
                    var s1 = new UI.Card({
                      title: 'Step 1',
                      body: 'Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
                      scrollable: true
                    });
                    s1.show();
                  } else if (e.itemIndex === 2) {
                    var s2 = new UI.Card({
                      title: 'Step 2',
                      body: 'In a medium bowl, cream together the sugar and butter.',
                      scrollable: true
                    });
                    s2.show();
                  } else if (e.itemIndex === 3) {
                    var s3 = new UI.Card({
                      title: 'Step 3',
                      body: 'Beat in the bananas, one at a time; then, stir in the vanilla.',
                      scrollable: true
                    });
                    s3.show();
                  } else if (e.itemIndex === 4) {
                    var s4 = new UI.Card({
                      title: 'Step 4',
                      body: 'Combine flour and baking powder, add to the creamed mixture, and stir well.',
                      scrollable: true
                    });
                    s4.show();
                  } else if (e.itemIndex === 5) {
                    var s5 = new UI.Card({
                      title: 'Step 5',
                      body: 'Stir in the milk until batter is smooth.',
                      scrollable: true
                    });
                    s5.show();
                  } else if (e.itemIndex === 6) {
                    var s6 = new UI.Card({
                      title: 'Step 6',
                      body: 'Pour or spoon batter into prepared pan.',
                      scrollable: true
                    });
                    s6.show();
                  } else if (e.itemIndex === 7) {
                    var s7 = new UI.Card({
                      title: 'Step 7',
                      body: 'Bake for 30-40 minutes in the preheated oven.',
                      scrollable: true
                    });
                    s7.show();
                  }
            });
                  Banana.show();
              }
            });
            Eggs.show();
          } else if (e.itemIndex === 0) {
            var Milk = new UI.Menu({
            sections: [{
              title: "Swap with...",
              items: [{
                title: 'Nut Milk',
                // icon: 'images/menu_icon.png',
                // subtitle: 'Can do Menus'
              }, {
                title: 'Soy Milk',
                // subtitle: 'Subtitle Text'
              }]
            }]
          });
            Milk.on('select', function(e){
              if (e.itemIndex === 0) {
                  var NMilk = new UI.Menu({
                    sections: [{
                      title: "Recipe (Nut Milk)",
                      items: [{
                        title: "Ingredients",
                        subtitle: "Sugar (1 cup)\nUnsalted butter (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nNut Milk (¾ cups)"
                      }, {
                        title: "Step 1:",
                        subtitle: "Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."
                      }, {
                        title: "Step 2:",
                        subtitle: "In a medium bowl, cream together the sugar and butter."
                      }, {
                        title: "Step 3:",
                        subtitle: "Beat in the eggs, one at a time; then, stir in the vanilla."
                      }, {
                        title: "Step 4:",
                        subtitle: "Combine flour and baking powder, add to the creamed mixture, and stir well."
                      }, { 
                        title: "Step 5:",
                        subtitle: "Stir in the nut milk until batter is smooth."  
                      }, {
                        title: "Step 6:",
                        subtitle: "Pour or spoon batter into prepared pan."
                      }, {
                        title: "Step 7:",
                        subtitle: "Bake for 30-40 minutes in the preheated oven."
                      }]
                    }]
                  });
                NMilk.show(); 
                NMilk.on('select', function(e){
                  if (e.itemIndex === 0) {
                    var Ingredients = new UI.Card({
                      title: 'Ingredients',
                      body: 'Sugar (1 cup)\nUnsalted butter (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nNut Milk (¾ cups)',
                      scrollable: true
                    });
                     Ingredients.show();              
                  } else if (e.itemIndex === 1) {
                    var s1 = new UI.Card({
                      title: 'Step 1',
                      body: 'Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
                      scrollable: true
                    });
                    s1.show();
                  } else if (e.itemIndex === 2) {
                    var s2 = new UI.Card({
                      title: 'Step 2',
                      body: 'In a medium bowl, cream together the sugar and butter.',
                      scrollable: true
                    });
                    s2.show();
                  } else if (e.itemIndex === 3) {
                    var s3 = new UI.Card({
                      title: 'Step 3',
                      body: 'Beat in the eggs, one at a time; then, stir in the vanilla.',
                      scrollable: true
                    });
                    s3.show();
                  } else if (e.itemIndex === 4) {
                    var s4 = new UI.Card({
                      title: 'Step 4',
                      body: 'Combine flour and baking powder, add to the creamed mixture, and stir well.',
                      scrollable: true
                    });
                    s4.show();
                  } else if (e.itemIndex === 5) {
                    var s5 = new UI.Card({
                      title: 'Step 5',
                      body: 'Stir in the nut milk until batter is smooth.',
                      scrollable: true
                    });
                    s5.show();
                  } else if (e.itemIndex === 6) {
                    var s6 = new UI.Card({
                      title: 'Step 6',
                      body: 'Pour or spoon batter into prepared pan.',
                      scrollable: true
                    });
                    s6.show();
                  } else if (e.itemIndex === 7) {
                    var s7 = new UI.Card({
                      title: 'Step 7',
                      body: 'Bake for 30-40 minutes in the preheated oven.',
                      scrollable: true
                    });
                    s7.show();
                  }
            });           
              } else if (e.itemIndex === 1) {
                  var SMilk = new UI.Menu({
                    sections: [{
                      title: "Recipe (Soy Milk)",
                      items: [{
                        title: "Ingredients",
                        subtitle: "Sugar (1 cup)\nUnsalted butter (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nSoy Milk (¾ cups)"
                      }, {
                        title: "Step 1:",
                        subtitle: "Grease and flour a 9x9 inch pan or line a muffin pan with paper liners."
                      }, {
                        title: "Step 2:",
                        subtitle: "In a medium bowl, cream together the sugar and butter."
                      }, {
                        title: "Step 3:",
                        subtitle: "Beat in the eggs, one at a time; then, stir in the vanilla."
                      }, {
                        title: "Step 4:",
                        subtitle: "Combine flour and baking powder, add to the creamed mixture, and stir well."
                      }, { 
                        title: "Step 5:",
                        subtitle: "Stir in the soy milk until batter is smooth."  
                      }, {
                        title: "Step 6:",
                        subtitle: "Pour or spoon batter into prepared pan."
                      }, {
                        title: "Step 7:",
                        subtitle: "Bake for 30-40 minutes in the preheated oven."
                      }]
                    }]
                  });
                SMilk.show(); 
                SMilk.on('select', function(e){
                  if (e.itemIndex === 0) {
                    var Ingredients = new UI.Card({
                      title: 'Ingredients',
                      body: 'Sugar (1 cup)\nUnsalted butter (½ cup)\nEggs (2)\nVanilla extract (1 tablespoon)\nAll-purpose flour (1 ½ cups)\nBaking powder (1 ¾ teaspoons)\nSoy Milk (¾ cups)',
                      scrollable: true
                    });
                     Ingredients.show();              
                  } else if (e.itemIndex === 1) {
                    var s1 = new UI.Card({
                      title: 'Step 1',
                      body: 'Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.',
                      scrollable: true
                    });
                    s1.show();
                  } else if (e.itemIndex === 2) {
                    var s2 = new UI.Card({
                      title: 'Step 2',
                      body: 'In a medium bowl, cream together the sugar and butter.',
                      scrollable: true
                    });
                    s2.show();
                  } else if (e.itemIndex === 3) {
                    var s3 = new UI.Card({
                      title: 'Step 3',
                      body: 'Beat in the eggs, one at a time; then, stir in the vanilla.',
                      scrollable: true
                    });
                    s3.show();
                  } else if (e.itemIndex === 4) {
                    var s4 = new UI.Card({
                      title: 'Step 4',
                      body: 'Combine flour and baking powder, add to the creamed mixture, and stir well.',
                      scrollable: true
                    });
                    s4.show();
                  } else if (e.itemIndex === 5) {
                    var s5 = new UI.Card({
                      title: 'Step 5',
                      body: 'Stir in the soy milk until batter is smooth.',
                      scrollable: true
                    });
                    s5.show();
                  } else if (e.itemIndex === 6) {
                    var s6 = new UI.Card({
                      title: 'Step 6',
                      body: 'Pour or spoon batter into prepared pan.',
                      scrollable: true
                    });
                    s6.show();
                  } else if (e.itemIndex === 7) {
                    var s7 = new UI.Card({
                      title: 'Step 7',
                      body: 'Bake for 30-40 minutes in the preheated oven.',
                      scrollable: true
                    });
                    s7.show();
                  }
            });   
              }
            });
          Milk.show();
          }  
        });
        recipe1.show();
     });
      cake1.show();
      // cakeMenu.show();
    } else if (e.itemIndex === 1) {
      cookieMenu.show();
    } else if (e.itemIndex === 2) {
      frozenMenu.show();
    } else if (e.itemIndex === 3) {
      otherMenu.show();
    }
  });
  menu.show();
});