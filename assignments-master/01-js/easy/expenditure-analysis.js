/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const hashMapForTotalSpent = new Map();
  for (let itemIndex = 0; itemIndex < transactions.length; itemIndex++) {
    hashMapForTotalSpent.set(transactions[itemIndex].category, 0);
  }

  for (let itemIndex = 0; itemIndex < transactions.length; itemIndex++) {
    const eachTransaction = transactions[itemIndex];
    if (hashMapForTotalSpent.has(eachTransaction.category)) {
      const prevValue = hashMapForTotalSpent.get(eachTransaction.category);
      hashMapForTotalSpent.set(
        eachTransaction.category,
        prevValue + eachTransaction.price
      );
    }
  }
  let result = [];
  hashMapForTotalSpent.forEach((value, key) => {
    result = [
      ...result,
      {
        category: key,
        totalSpent: value,
      },
    ];
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
