import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
const TaskDate = ({ date }) => {
  let content;
  if (date) {
    console.log(date);
    const str = parseISO(date);
    console.log(str);
    const formatDate = formatDistanceToNow(str, { addSuffix: true });
    content = <span>{formatDate}</span>;
  } else {
    content = <span>Loading...</span>;
  }
  return content;
};

export default TaskDate;
