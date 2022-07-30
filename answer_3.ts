// modify this block
const queryString = `
  SELECT * FROM customer 
  LEFT JOIN favColor 
  ON customer.CustID=favColor.CustID 
  GROUP BY favColor.CustID 
  HAVING COUNT(favColor.CustID) > 2;
`;
// modify this block

export default queryString;