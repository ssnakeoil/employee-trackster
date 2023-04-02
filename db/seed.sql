use employees;

INSERT INTO department
    (name)
VALUES
    ('Research and Development'),
    ('Regulatory'),
    ('Manufacturing'),
    ('Quality');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('R&D Manager', 100000, 1),
    ('Lead Regulatory Specialist', 80000, 2),
    ('Lead Manufacturing Associate', 90000, 3),
    ('Quality Manager', 120000, 4),
    ('Development Scientist I', 55000, 1),
    ('Regulatory Specialist I', 109000, 2),
    ('Manufacturing Associate I', 60000, 3),
    ('Quality Person in Plant', 78000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Stefi', 'Lao', 1, NULL),
    ('Owen', 'Klinger', 3, NULL),
    ('James', 'Bond', 5, NULL),
    ('Allen', 'Stone', 7, NULL),
    ('Benito', 'Kim', 2, 1),
    ('Christopher', 'Knives', 4, 3),
    ('Billy', 'Joel', 6, 5),
    ('Queen', 'Elizabeth', 8, 7);
