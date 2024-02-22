export default function groupItemsByDay(databasePages) {
    // Group items by 'day'
    const grouped = databasePages.reduce((acc, item) => {
        // Check if the itemday group already exists
        if (!acc[item.day]) {
            acc[item.day] = [];
        }

        // Add the item to the corresponding group
        acc[item.day].push(item);
        return acc;
    }, {});

    // Convert the grouped items into the desired array format
    return Object.keys(grouped).map(day => ({
        day,
        itrItems: grouped[day]
    }));
}
