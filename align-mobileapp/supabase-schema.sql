create table if not exists plans (
  id text primary key,
  title_en text not null,
  title_ar text not null,
  summary_en text not null,
  summary_ar text not null,
  description_en text not null,
  description_ar text not null,
  duration text not null,
  level text not null,
  coach text not null,
  price text not null,
  focus text not null
);

create table if not exists bookings (
  id bigint generated always as identity primary key,
  plan_id text,
  plan_name text not null,
  email text not null,
  note text not null,
  preferred_date date not null,
  created_at timestamp with time zone default now()
);
