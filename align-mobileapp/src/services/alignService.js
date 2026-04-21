import { demoPlans } from '../data/demoPlans';
import { hasSupabaseEnv, supabase } from './supabaseClient';

export const getPlans = async () => {
  if (!hasSupabaseEnv || !supabase) {
    return {
      data: demoPlans,
      error: null,
      source: 'demo'
    };
  }

  const { data, error } = await supabase.from('plans').select('*');

  if (error) {
    return {
      data: demoPlans,
      error,
      source: 'demo'
    };
  }

  return {
    data: data && data.length ? data : demoPlans,
    error: null,
    source: 'live'
  };
};

export const createBooking = async (booking) => {
  if (!hasSupabaseEnv || !supabase) {
    const localBookings = JSON.parse(localStorage.getItem('align_bookings') || '[]');
    localBookings.push({
      id: `local-${Date.now()}`,
      ...booking
    });
    localStorage.setItem('align_bookings', JSON.stringify(localBookings));

    return {
      data: booking,
      error: null,
      source: 'demo'
    };
  }

  const { data, error } = await supabase.from('bookings').insert([booking]).select();

  return {
    data,
    error,
    source: 'live'
  };
};
