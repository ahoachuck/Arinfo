function onFinish() {
  $(this).siblings('p').css('text-decoration', 'line-through');
  $(this).prop('disabled', true);
}

function onAdd() {
  const taskDescription = $('#todo-input').val().trim();
  if (taskDescription.length <= 0) return;

  const newTask = $('#base-list-element').clone();
  newTask.find('p').text(taskDescription);
  newTask.removeClass('d-none');
  $('#parent_div').append(newTask);

  $('#todo-input').val('');

  newTask.find('#finish').click(onFinish);
  newTask.find('#delete').click(() => {
    newTask.remove();
  });
}

function main() {
  $('#add-btn').click(onAdd);
  $('#todo-input').keypress((event) => {
    if (event.which === 13) $('#add-btn').click() // entre ta mere
  });
}

$(document).ready(main);
