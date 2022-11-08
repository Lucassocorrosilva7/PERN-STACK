const pool = require("../db");

const getAllTasks = async (req, res) => {
    try {
    const allTasks = await pool.query('SELECT * from task')
    res.send(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
};

const getTask = async(req, res) => {
 try {
   const {id} = req.params
  const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);

  if(result.rows.length === 0) return res.status(404).json({
    message: "Tarefa não encontrada!"
  })
  res.json(result.rows[0]);
 } catch (error) {
    console.log(error.message)
 }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
    "INSERT INTO task (title,description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  res.send(result.rows[0]);
  } catch (error) {
    res.json({error: error.message})
  }
  
};

const deleteTask = async(req, res) => {
  const { id } = req.params
  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

  if(result.rowCount.length === 0) 
  return res.status(404).json({
    message: "Tarefa deletada!"
  });

  return res.sendStatus(204);
};

const updateTask = (req, res) => {
  res.send("retrieving a list of tasks");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
