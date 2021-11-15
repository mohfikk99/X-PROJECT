const tours = (tours = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return tours.filter((tour) => tour._id !== action.payload);
        case 'UPDATE':
            return tours.map((tour) => tour._id === action.payload._id ? action.payload : tour);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...tours, action.payload];

        default:
            return tours;
    }
}

export default tours;