import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { Check, Delete } from "@mui/icons-material";

const Todo = ({ title }) => {
  return (
    <div>
      <Card style={{ marginTop: 5, background: blue[100] }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <IconButton>
              <Check style={{ color: green["A400"] }} />
            </IconButton>
            {title}
            <IconButton style={{ float: "right" }}>
              <Delete style={{ color: red[500] }} />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Todo;
