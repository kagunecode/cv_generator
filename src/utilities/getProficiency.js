export default function getProficiency(proficiency) {
  switch (proficiency) {
    case 'Beginner':
      return 'w-[25%]';
    case 'Intermediate':
      return 'w-[50%]';
    case 'Advanced':
      return 'w-[75%]';
    case 'Expert':
      return 'w-[100%]';
  }
}
