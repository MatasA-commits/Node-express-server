const SELECT = `
SELECT 
  m.id, 
  m.title, 
  JSON_OBJECT('actor', c.actor, 'role', c.role) as main_character,
  m.year, 
  m.rating, 
  IF(COUNT(i.id) = 0, JSON_ARRAY(), JSON_ARRAYAGG(i.src)) as images,
  JSON_OBJECT(
    'id', u.id,
    'name', u.name,
    'surname', u.surname,
    'email', u.email,
    'mobile', u.mobile
  ) as owner
FROM movies as m
LEFT JOIN images as i
ON i.movieId = m.id
LEFT JOIN  main_character as c
ON m.mainCharacterId = c.id
LEFT JOIN  users as u
On u.id = m.ownerId`;

const GROUP = 'GROUP BY m.id';

const SQL = {
  SELECT,
  GROUP,
} as const;

export default SQL;
