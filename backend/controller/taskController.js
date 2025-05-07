import Todo from '../model/Task.js'

const fetching = async (req, res) => {
    try {
        const userId = req.user.id; // use req.user.id if you have auth
        const todoList = await Todo.find({ userId });
        res.status(200).json(todoList);
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
};

const create = async (req, res) => {
    try {
        const userId = req.user.id;
        const { taskname, taskdate } = req.body;
        const newTask = new Todo({ userId, taskname, taskdate, completed: false });
        const newItem = await newTask.save();
        res.status(201).json({ success: true, message: 'New To-Do Task Added', toDoItem: newItem });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
};
const taskDelete = async (req, res) => {
    try {
        const userId = req.user.id;
        const { taskId } = req.body;
        const task = await Todo.findById(taskId);
        console.log('checking')
        if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
        if (task.userId.toString() !== userId) return res.status(403).json({ success: false, message: 'Unauthorized' });

        await Todo.findByIdAndDelete(taskId);
        res.status(200).json({ success: true, message: `Task id ${taskId} is deleted`, taskId });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
}
const allTaskDelete = async (req, res) => {
    console.log('are you working')
    try {
        const userId = req.user.id;
        const result = await Todo.deleteMany({ userId: userId });
        if (!result) return res.status(404).json({ success: false, message: 'Tasks not deleted' });
        res.status(200).json({ success: true, message: `${result.deletedCount} item(s) deleted` });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
}
const update = async (req, res) => {
    try {
        const userId = req.user.id;
        const { taskId, taskname, taskdate } = req.body;
        const task = await Todo.findById(taskId);

        if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
        if (task.userId.toString() !== userId) return res.status(403).json({ success: false, message: 'Unauthorized' });

        task.taskname = taskname;
        task.taskdate = taskdate;
        await task.save();

        res.status(200).json({ success: true, message: `Task id ${taskId} is updated`, task });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
}

const markComplete = async (req, res) => {
    try {
        const userId = req.user.id;
        const { taskId } = req.body;
        const task = await Todo.findById(taskId);

        if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
        if (task.userId.toString() !== userId) return res.status(403).json({ success: false, message: 'Unauthorized' });

        task.completed = !task.completed;
        await task.save();

        res.status(200).json({ success: true, message: `Task id ${taskId} marked complete = ${task.completed}`, task });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
}

export { fetching, create, taskDelete, update, markComplete, allTaskDelete }