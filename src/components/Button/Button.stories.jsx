import PropTypes from 'prop-types';

const Button = ({ label, variant }) => (
  <button
    className={
      variant === 'primary'
        ? 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        : 'px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300'
    }
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = { args: { label: '확인', variant: 'primary' } };
export const Secondary = { args: { label: '취소', variant: 'secondary' } };
