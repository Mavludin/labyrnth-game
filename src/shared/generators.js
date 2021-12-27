import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons/lib/icons';

export const generateRandomIndexes = (fieldSize) => {
  const firstRandomIndex = Math.floor(Math.random() * fieldSize);
  const secondRandomIndex = Math.floor(Math.random() * fieldSize);

  return { firstRandomIndex, secondRandomIndex };
};

export const abcGenerator = (fieldSize) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  return alpha.map((x) => String.fromCharCode(x)).slice(0, fieldSize);
};

export const fieldGenerator = (fieldSize) => {
  return [...Array(fieldSize)].map(() => [...Array(fieldSize)].map(() => ''));
};

export const directions = {
  1: {
    icon: <ArrowUpOutlined />,
    addingBy: -1,
  },
  2: {
    icon: <ArrowDownOutlined />,
    addingBy: 1,
  },
  3: {
    icon: <ArrowLeftOutlined />,
    addingBy: -1,
  },
  4: {
    icon: <ArrowRightOutlined />,
    addingBy: 1,
  },
};
