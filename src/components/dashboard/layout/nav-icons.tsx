

import type { Icon } from '@phosphor-icons/react/dist/lib/types';

import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { UserPlus } from '@phosphor-icons/react/dist/ssr/UserPlus';
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple';
import { Wallet } from '@phosphor-icons/react/dist/ssr/Wallet';
import { FileText } from '@phosphor-icons/react/dist/ssr/FileText';
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr/ShoppingCart';
import { CreditCard } from '@phosphor-icons/react/dist/ssr/CreditCard';
import { Robot } from '@phosphor-icons/react/dist/ssr/Robot';
import { Layout } from '@phosphor-icons/react/dist/ssr/Layout';
import { ChatTeardrop } from '@phosphor-icons/react/dist/ssr/ChatTeardrop';
import { GearSix } from '@phosphor-icons/react/dist/ssr/GearSix';
export const navIcons: Record<string, Icon> = {
  user: UserIcon,
  'user-plus': UserPlus,
  envelope: EnvelopeSimple,
  wallet: Wallet,
  'file-text': FileText,
  'shopping-cart': ShoppingCart,
  'credit-card': CreditCard,
  robot: Robot,
  layout: Layout,
  chat: ChatTeardrop,
  'gear-six': GearSix,
};
