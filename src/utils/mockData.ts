export const mockRatings = [
  {
    id: '1',
    rating: 5,
    created_at: new Date().toISOString(),
    comment: 'Excellent service!'
  },
  {
    id: '2',
    rating: 4,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    comment: 'Very good'
  },
  {
    id: '3',
    rating: 5,
    created_at: new Date().toISOString(),
    comment: 'Perfect!'
  }
];
