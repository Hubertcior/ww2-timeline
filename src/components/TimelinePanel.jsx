const TimelinePanel = ({ children }) => {
  return (
    <div className="fixed border-y-amber-900 border-3 right-0 mr-6 top-1/2 transform -translate-y-1/2 w-1/5 h-4/5 bg-gray-300/90 z-50 rounded-2xl flex items-center justify-center">
      {children}
    </div>
  );
};

export default TimelinePanel;
