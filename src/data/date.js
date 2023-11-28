export const days = [
  {
    id: 1,
    title: 'Понеділок',
  },
  {
    id: 2,
    title: 'Вівторок',
  },
  {
    id: 3,
    title: 'Середа',
  },
  {
    id: 4,
    title: 'Четвер',
  },
  {
    id: 5,
    title: "П'ятниця",
  },
]

export function getDayById(days, id) {
  return days.find((day) => day.id == id)
}
