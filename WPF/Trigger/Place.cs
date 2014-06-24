﻿//**********************************************************************************
//* Copyright (C) 2007,2014 Hitachi Solutions,Ltd.
//**********************************************************************************

#region Apache License
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. 
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
#endregion

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Trigger
{
    /// <summary>Place</summary>
    public class Place
    {
        /// <summary>名前</summary>
        private string _name;

        /// <summary>状態</summary>
        private string _state;

        /// <summary>名前</summary>
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        /// <summary>状態</summary>
        public string State
        {
            get { return _state; }
            set { _state = value; }
        }

        /// <summary>コンストラクタ</summary>
        public Place(string name, string state)
        {
            this._name = name;
            this._state = state;
        }
    }
}
