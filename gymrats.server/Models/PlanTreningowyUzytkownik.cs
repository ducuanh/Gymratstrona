﻿using System;
using System.Collections.Generic;

namespace gymrats.server.Models;

public partial class PlanTreningowyUzytkownik
{
    public int IdPlanTreningowy { get; set; }

    public int UzytkownikIdUzytkownika { get; set; }

    public int PlanTreningowyIdPlanTreningowy { get; set; }

    public virtual PlanTreningowy PlanTreningowyIdPlanTreningowyNavigation { get; set; } = null!;

    public virtual Uzytkownik UzytkownikIdUzytkownikaNavigation { get; set; } = null!;
}
