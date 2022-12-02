export default function addRecentActivity(activity) {
  // add recent activity to sessionStorage
  const recentActivity = JSON.parse(localStorage.getItem('recentActivity')) || [];
  recentActivity.push(activity);
  localStorage.setItem('recentActivity', JSON.stringify(recentActivity));
}

export function getRecentActivity() {
  // get recent activity from sessionStorage
  return JSON.parse(localStorage.getItem('recentActivity')) || [];
}