'use client';

import pfp from '@assets/pfp.png';
import Column from '@components/Column';
import Row from '@components/Row';
import { BookmarkAddOutlined, Link, Send } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';

type Props = {
  origin: string;
  author: string;
  date: Date;
  children: React.ReactNode;
};

const Index = ({ origin, author, date, children }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <Column
      gap={0}
      align="start"
      className="w-full border border-gray-100 rounded-md"
    >
      <Row className="border-b border-primary w-full p-3 justify-between">
        <p>{origin}</p>
        <Row className="text-primary" gap={4}>
          <Link fontSize="small" />
          <BookmarkAddOutlined fontSize="small" />
        </Row>
      </Row>
      <Column className="p-4" align="start">
        <Row>
          <Image
            src={pfp}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Column gap={1} align="start">
            <p className="font-bold text-sm">{author}</p>
            <p className="text-xs text-gray-100">
              {date.toDateString().split(' ').slice(1).join(' ')}
            </p>
          </Column>
        </Row>
        {children}
      </Column>
      <Row gap={0} className="p-4 border-t border-gray-200 justify-between">
        <Image
          src={pfp}
          alt="avatar"
          width={34}
          height={34}
          className="rounded-full mr-1"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="comment"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={
                  field.value === undefined || field.value === ''
                    ? 'Add a comment...'
                    : ''
                }
                size="small"
                InputLabelProps={{ shrink: false }}
                InputProps={{ sx: { borderRadius: '20px' } }}
              />
            )}
          />
        </form>
        <IconButton size="small">
          <Send fontSize="small" />
        </IconButton>
      </Row>
    </Column>
  );
};

export default Index;
