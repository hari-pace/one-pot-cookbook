// Filter items by search
export default function filterDuplicate({ recipenav }) {
  const items = recipenav;
  const filteredItems =
    items &&
    items.reduce((accumulator, current) => {
      if (!accumulator.find((item) => item.category === current.category)) {
        accumulator.push(current);
      }

      return accumulator;
    }, []);

  return filteredItems;
}
