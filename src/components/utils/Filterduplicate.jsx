// Filter items by search
export default function filterDuplicate({ recipenav }) {
  const items = recipenav;
  const filteredItems =
    items &&
    items.reduce((accumulator, current) => {
      if (
        !accumulator.find(
          (item) => item.fields.category === current.fields.category
        )
      ) {
        accumulator.push(current);
      }

      return accumulator;
    }, []);

  return filteredItems;
}
